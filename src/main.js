import { MemoryGame } from './memorygame';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jQuery';
import './styles.css';
import back from './img/0.jpg';
$(document).ready(function() {
  $("img").attr('src', back);
  var selected=false;
  var backupId=0;
  var backupImg;
  var newMemoryGame = new MemoryGame();
  newMemoryGame.shuffle();
  $('img').click(function(){
    var id=$(this).attr('id');
    $(this).attr('src', newMemoryGame.cells[id]);
    if (selected) {
      if (backupImg==this){

      } else {
        if (newMemoryGame.cells[id]==newMemoryGame.cells[backupId]){
          $(this).off();
          $(backupImg).off();
        } else {
          var that = this;
          setTimeout(function(){
            $(that).attr('src', back);
            $(backupImg).attr('src', back);
          },500);
        }
        selected=false;
      }
    } else {
      selected=true;
      backupId=id;
      backupImg=this;
    }
  });
});
