import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Notes = new Mongo.Collection('notes');

Notes.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  }
});

NotesSchema = new SimpleSchema({
  date: {
      type: Date,
      autoform: {
         type: 'date'
      }
   },
   content: {
     type: String,
     label: "Meeting Notes"
   },
   group: {
     type: String,
     label: "Group ID Notes Belong To",
     autoform: {
       type: "hidden"
     }
   }
});

Notes.attachSchema(NotesSchema);
