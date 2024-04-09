import { Message } from './../model/User';
import {z} from 'zod';

export const MessageInSchema= z.object({
  content:z
  .string()
  .min(10, {message:'Content must be 10 character.'})
  .min(300, {message:'Content must be no longer than 300 character.'})
})