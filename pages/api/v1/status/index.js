function status(request, response) {
  response.status(200).json({ key: "oi amigos são josé dos campos" });
}

export default status;
