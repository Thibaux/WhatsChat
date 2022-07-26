import { getAllUsers } from '../../../Infrastructure/Database/Controllers';
import { HandlerInterface } from '../interfaces';

export const GetAllUsers = async ({ req, res, next }: HandlerInterface) => {
  try {
    const result = await getAllUsers();

    if (typeof result === 'string') {
      res.status(400).json({ error: result });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    next(error);
  }
};
