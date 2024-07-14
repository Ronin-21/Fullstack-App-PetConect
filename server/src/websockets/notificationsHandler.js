export const notificationsHandler = (io, socket) => {
  // Enviar la notificacion al usuario
  const sendNotificationToUser = async (userId, message) => {
    const userFound = await usersConnected.forEach((user) => {
      if (user.username === userId) {
        socket.to(user.client).emit("notification", message);
      }
    });
  };

  return { sendNotificationToUser };
};
