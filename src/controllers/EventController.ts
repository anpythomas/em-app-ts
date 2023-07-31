import { Request, Response } from 'express';
import Event, { IEvent } from '../models/Event';

class EventController {
  static async getEventById(req: Request, res: Response) {
    try {  // *
      const event: IEvent | null = await Event.findById(req.params.id);
      if (event) {
        return res.status(200).json({ event });
      } else {
        return res.status(404).json({ error: 'Event not found' });
      }
    } catch (err) {
      return res.status(500).json({ error: (err as Error).message });
    }
  }
}

export default EventController;
