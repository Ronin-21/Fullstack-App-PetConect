export const chatsHandler = async (io, socket) => {
  socket.on("chat message", async (msg) => {
    let result;
    const username = socket.handshake.auth.username ?? "anonymous";
    console.log({ username });

    try {
      result = await db.execute({
        sql: "INSERT INTO messages (content, user) VALUES (:msg, :username)",
        args: { msg, username },
      });
    } catch (e) {
      console.error(e);
      return;
    }

    io.emit("chat message", msg, result.lastInsertRowid.toString(), username);
  });

  if (!socket.recovered) {
    // <- recuperase los mensajes sin conexión
    try {
      const results = await db.execute({
        sql: "SELECT id, content, user FROM messages WHERE id > ?",
        args: [socket.handshake.auth.serverOffset ?? 0],
      });

      results.rows.forEach((row) => {
        socket.emit("chat message", row.content, row.id.toString(), row.user);
      });
    } catch (e) {
      console.error(e);
    }
  }
};
