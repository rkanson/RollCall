import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Notes = new Mongo.Collection('notes');

Notes.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  }
});

NotesSchema = new SimpleSchema({
  date: {
      type: Date,
      optional: true,
      autoform: {
         type: 'date'
      }
   },
   notes: {
     type: String,
     label: "Meeting Notes"
   },
   group: {
     type: String,
     label: "Group Notes Belong To",
     autoform: {
       type: "hidden"
     }
   },
   creator: {
     type: String,
     label: "Creator of the Notes",
     autoform: {
       type: "hidden"
     }
   }
});

Notes.attachSchema(NotesSchema);
