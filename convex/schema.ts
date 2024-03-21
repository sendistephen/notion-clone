import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  document: defineTable({
    title: v.string(),
    userId: v.string(),
    isArchieved: v.boolean(),
    parentDocument: v.optional(v.id('documents')),
    content: v.optional(v.string()),
    coverImage: v.optional(v.string()),
    icon: v.optional(v.string()),
    isPublished: v.boolean(),
  })
    .index('by_user', ['userId']) // we can query by logged in user
    .index('by_user_parent', ['userId', 'parentDocument']),
});
