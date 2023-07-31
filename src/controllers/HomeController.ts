import { Request, Response } from 'express';
import Event, { IEvent } from '../models/Event';

class HomeController {
  static async getAllEvents(req: Request, res: Response) {
    try {
      const events: IEvent[] = await Event.find({});
      return res.status(200).json({ events });
    } catch (err) {
      return res.status(500).json({ error: (err as Error).message });
    }
  }
}

export default HomeController;
