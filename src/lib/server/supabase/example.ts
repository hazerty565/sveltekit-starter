import { z } from 'zod';
import { supabaseAdmin } from './client';

const profileSchema = z.object({
  email: z.string().email(),
  username: z.string().min(1).max(32)
});

export async function createProfile(input: unknown) {
  const result = profileSchema.safeParse(input);
  if (!result.success) {
    return { error: result.error };
  }

  const { data, error } = await supabaseAdmin
    .from('profiles')
    .insert([{ email: result.data.email, username: result.data.username }])
    .select()
    .single();

  return { data, error };
}

export function validateProfile(input: unknown) {
  return profileSchema.safeParse(input);
}
