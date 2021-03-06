function joinedNoticesShow(){
  var database = firebase.database().ref().child("notes");
  var frag = document.getElementById("notices");

  while (frag.firstChild) {
    frag.removeChild(frag.firstChild);
  }
  database.once("value", function(snapshot) {
    snapshot.forEach(function(child) {
      let note = child.val();
      let userId = firebase.auth().currentUser.uid;



      if (firebase.auth().currentUser != null && note.members != undefined) {
        if (note.members[userId] != undefined) {
          notesFromFB(note.userEmail, note.place, note.date, note.time, note.description, child.key);



          // wyroznienie ogloszen, ktore uzytkownik stworzyl
          let userEmail = firebase.auth().currentUser.email;
          let user = userEmail.substring(0, userEmail.lastIndexOf("@"))
          markYourNotice(user, child.key);


          // wyciagniecie z firebase listy uczestnikow ogloszenia
          let membersRef = firebase.database().ref().child("notes/" + child.key + "/members/");

          let key = child.key;
          membersRef.once("value", function(snapshot){
            snapshot.forEach(function(child) {
              addMembers(child.val().user, key);
            });

          });

          anulujButton(key);
        }
    }
    });
  });
}
