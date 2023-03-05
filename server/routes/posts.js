import express from 'express';
import{ getposts ,createPost} from '../controllers/posts.js';

const routes = express.Router();


routes.get('/',getposts );
routes.post('/',createPost);

export default routes;