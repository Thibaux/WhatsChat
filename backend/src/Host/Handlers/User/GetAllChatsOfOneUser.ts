import { getAllChatsByUserName } from '../../../Infrastructure/Database/Controllers';
import { HandlerInterface } from '../interfaces';

export const GetAllChatsOfOneUser = async ({
  req,
  res,
  next,
}: HandlerInterface) => {
  try {
    if (!req.params.username)
      res.status(400).send({ error: 'Username is not provided!' });

    const result = await getAllChatsByUserName(req.params.username);

    if (typeof result === 'string') {
      res.status(400).json({ error: result });
    } else {
      res.status(200).json({ chats: result });
    }
  } catch (error) {
    next(error);
  }
};
