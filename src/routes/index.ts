import { Router } from 'express';
import EventController from '../controllers/EventController';

const router = Router();

router.get('/events', EventController.getAllEvents);
router.get('/events/:id', EventController.getEventById); // *

export default router;
