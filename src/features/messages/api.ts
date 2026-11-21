// // import { supabase } from "../../shared/supabase";
// // import { messageSchema } from "./schemas";

// export async function fetchMessages(chatId: string) {
//   const { data, error } = await supabase
//     .from("messages")
//     .select("*")
//     .eq("chat_id", chatId)
//     .order("created_at", { ascending: true });

//   if (error) throw error;
//   return messageSchema.array().parse(data);
// }

// export async function sendMessage(chatId: string, text: string) {
//   const { error } = await supabase
//     .from("messages")
//     .insert({ chat_id: chatId, text });

//   if (error) throw error;
// }
