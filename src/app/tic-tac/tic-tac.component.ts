import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-tic-tac',
  templateUrl: './tic-tac.component.html',
  styleUrls: ['./tic-tac.component.css']
})
export class TicTacComponent implements OnInit {

  constructor() { }

  reload(){             //reload our page
    location.reload();
  }

  tru = "true"  //for auto-play audio

  // insert value in our input
  val1;
  val2;
  val3;
  val4;
  val5;
  val6;
  val7;
  val8;
  val9;

  // button dissable after win
  dis1 = false;
  dis2 = false;
  dis3 = false;
  dis4 = false;
  dis5 = false;
  dis6 = false;
  dis7 = false;
  dis8 = false;
  dis9 = false;

  // store current input value
  i;


  bgColor1;
  bgColor2;
  bgColor3;
  bgColor4;
  bgColor5;
  bgColor6;
  bgColor7;
  bgColor8;
  bgColor9;



  // winnging-sweet alert-------------------------------------------------

  zeroSweetBox() {
    Swal.fire({
      title: 'YOU WIN',
      width: 300,
      imageUrl: 'https://www.evan-roth.com/photos/data/gifs/0.gif',
      background: '#fff url("https://media0.giphy.com/media/idLQTaS5tPfTANPc6H/giphy.gif")',
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: 'Custom image',
      backdrop: `
      rgba(0,0,123,0.4)
      url("https://media0.giphy.com/media/3ov9k8fmDbIqzzbsLS/giphy.gif")
      center top
      repeat
    `
    })
  }

  crossSweetBox() {
    Swal.fire({
      title: 'YOU WIN',
      width: 300,
      imageUrl: 'https://media1.giphy.com/media/dt6qassLoUgtDCwf3h/giphy.gif',
      background: '#fff url("https://media0.giphy.com/media/idLQTaS5tPfTANPc6H/giphy.gif")',
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: 'Custom image',
      backdrop: `
      rgba(0,0,123,0.4)
      url("https://media0.giphy.com/media/3ov9k8fmDbIqzzbsLS/giphy.gif")
      center top
      repeat
    `
    })
  }
  // ending sweet alert---------------------------------------------------

// disable button --------------------------------------------------------------

  disableButton() {
    this.dis1 = true;
    this.dis2 = true;
    this.dis3 = true;
    this.dis4 = true;
    this.dis5 = true;
    this.dis6 = true;
    this.dis7 = true;
    this.dis8 = true;
    this.dis9 = true;
  }


  // input1------------------------------------------------------------------------------------------------

  inp1() {
    if (this.i == "0") {

      this.bgColor1 = "blue"
      this.val1 = "X"
      this.i = "X"
      if (((this.val1 == this.val2) && (this.val1 == this.val3)) || ((this.val1 == this.val4) && (this.val1 == this.val7)) || ((this.val1 == this.val5) && (this.val1 == this.val9))) {
        this.crossSweetBox();
        this.disableButton();
      } this.dis1 = true;
    }
    else if (this.i == "X") {

      this.bgColor1 = "orange"
      this.val1 = "0"
      this.i = "0"
      if (((this.val1 == this.val2) && (this.val1 == this.val3)) || ((this.val1 == this.val4) && (this.val1 == this.val7)) || ((this.val1 == this.val5) && (this.val1 == this.val9))) {
        this.zeroSweetBox();
        this.disableButton();
      } this.dis1 = true;
    }
    else {

      this.bgColor1 = "orange"
      this.val1 = "0"
      this.i = "0"
      this.dis1 = true;

    }
  }

  // input2-------------------------------------------------------------------------------------------------


  inp2() {
    if (this.i == "0") {
      this.bgColor2 = "blue"
      this.val2 = "X"
      this.i = "X"
      if (((this.val2 == this.val1) && (this.val2 == this.val3)) || ((this.val2 == this.val5) && (this.val2 == this.val8))) {
        this.crossSweetBox();
        this.disableButton();
      } this.dis2 = true;
    }
    else if (this.i == "X") {
      this.bgColor2 = "orange"
      this.val2 = "0"
      this.i = "0"
      if (((this.val2 == this.val1) && (this.val2 == this.val3)) || ((this.val2 == this.val5) && (this.val2 == this.val8))) {
        this.zeroSweetBox();
        this.disableButton();
      } this.dis2 = true;
    }
    else {
      this.bgColor2 = "blue"
      this.val2 = "X"
      this.i = "X"
      this.dis2 = true
    }
  }


  // input3--------------------------------------------------------------------------------------------------------------------

  inp3() {
    if (this.i == "0") {
      this.bgColor3 = "blue"
      this.val3 = "X"
      this.i = "X"
      if (((this.val3 == this.val1) && (this.val3 == this.val2)) || ((this.val3 == this.val6) && (this.val3 == this.val9)) || ((this.val3 == this.val5) && (this.val3 == this.val7))) {
        this.crossSweetBox();
        this.disableButton();
      } this.dis3 = true;
    }
    else if (this.i == "X") {
      this.bgColor3 = "orange"
      this.val3 = "0"
      this.i = "0"
      if (((this.val3 == this.val1) && (this.val3 == this.val2)) || ((this.val3 == this.val6) && (this.val3 == this.val9)) || ((this.val3 == this.val5) && (this.val3 == this.val7))) {
        this.zeroSweetBox();
        this.disableButton();
      } this.dis3 = true;
    }
    else {
      this.bgColor3 = "orange"
      this.val3 = "0"
      this.i = "0"
      this.dis3 = true
    }
  }

  // input4-----------------------------------------------------------------------------------------------------

  inp4() {
    if (this.i == "0") {
      this.bgColor4 = "blue"
      this.val4 = "X"
      this.i = "X"
      if (((this.val4 == this.val1) && (this.val4 == this.val7)) || ((this.val4 == this.val5) && (this.val4 == this.val6))) {
        this.crossSweetBox();
        this.disableButton();
      } this.dis4 = true;
    }
    else if (this.i == "X") {
      this.bgColor4 = "orange"
      this.val4 = "0"
      this.i = "0"
      if (((this.val4 == this.val1) && (this.val4 == this.val7)) || ((this.val4 == this.val5) && (this.val4 == this.val6))) {
        this.zeroSweetBox();
        this.disableButton();
      } this.dis4 = true;
    }
    else {
      this.bgColor4 = "blue"
      this.val4 = "X"
      this.i = "X"
      this.dis4 = true
    }
  }


  // input5-------------------------------------------------------------------------------------------

  inp5() {
    if (this.i == "0") {
      this.bgColor5 = "blue"
      this.val5 = "X"
      this.i = "X"
      if (((this.val5 == this.val4) && (this.val5 == this.val6)) || ((this.val5 == this.val2) && (this.val5 == this.val8)) || ((this.val5 == this.val1) && (this.val5 == this.val9)) || ((this.val5 == this.val3) && (this.val5 == this.val7))) {
        this.crossSweetBox();
        this.disableButton();
      } this.dis5 = true;
    }
    else if (this.i == "X") {
      this.bgColor5 = "orange"
      this.val5 = "0"
      this.i = "0"
      if (((this.val5 == this.val4) && (this.val5 == this.val6)) || ((this.val5 == this.val2) && (this.val5 == this.val8)) || ((this.val5 == this.val1) && (this.val5 == this.val9)) || ((this.val5 == this.val3) && (this.val5 == this.val7))) {
        this.zeroSweetBox();
        this.disableButton();
      } this.dis5 = true;
    }
    else {
      this.bgColor5 = "orange"
      this.val5 = "0"
      this.i = "0"
      this.dis5 = true
    }
  }


  // input6-------------------------------------------------------------------------------------


  inp6() {
    if (this.i == "0") {
      this.bgColor6 = "blue"
      this.val6 = "X"
      this.i = "X"
      if (((this.val6 == this.val4) && (this.val6 == this.val5)) || ((this.val6 == this.val3) && (this.val6 == this.val9))) {
        this.crossSweetBox();
        this.disableButton();
      } this.dis6 = true;
    }
    else if (this.i == "X") {
      this.bgColor6 = "orange"
      this.val6 = "0"
      this.i = "0"
      if (((this.val6 == this.val4) && (this.val6 == this.val5)) || ((this.val6 == this.val3) && (this.val6 == this.val9))) {
        this.zeroSweetBox();
        this.disableButton();
      } this.dis6 = true;
    }
    else {
      this.bgColor6 = "blue"
      this.val6 = "X"
      this.i = "X"
      this.dis6 = true
    }
  }


  // input7-------------------------------------------------------------------------------------------

  inp7() {
    if (this.i == "0") {
      this.bgColor7 = "blue"
      this.val7 = "X"
      this.i = "X"
      if (((this.val7 == this.val4) && (this.val7 == this.val1)) || ((this.val7 == this.val8) && (this.val7 == this.val9)) || ((this.val7 == this.val5) && (this.val7 == this.val3))) {
        this.crossSweetBox();
        this.disableButton();
      } this.dis7 = true;
    }
    else if (this.i == "X") {
      this.bgColor7 = "orange"
      this.val7 = "0"
      this.i = "0"
      if (((this.val7 == this.val4) && (this.val7 == this.val1)) || ((this.val7 == this.val8) && (this.val7 == this.val9)) || ((this.val7 == this.val5) && (this.val7 == this.val3))) {
        this.zeroSweetBox();
        this.disableButton();
      } this.dis7 = true;
    }
    else {
      this.bgColor7 = "orange"
      this.val7 = "0"
      this.i = "0"
      this.dis7 = true
    }
  }

  // input8---------------------------------------------------------------------------------------------

  inp8() {
    if (this.i == "0") {
      this.bgColor8 = "blue"
      this.val8 = "X"
      this.i = "X"
      if (((this.val8 == this.val5) && (this.val8 == this.val2)) || ((this.val8 == this.val7) && (this.val8 == this.val9))) {
        this.crossSweetBox();
        this.disableButton();
      } this.dis8 = true;

    }
    else if (this.i == "X") {
      this.bgColor8 = "orange"
      this.val8 = "0"
      this.i = "0"
      if (((this.val8 == this.val5) && (this.val8 == this.val2)) || ((this.val8 == this.val7) && (this.val8 == this.val9))) {
        this.zeroSweetBox();
        this.disableButton();
      } this.dis8 = true;
    }
    else {
      this.bgColor8 = "blue"
      this.val8 = "X"
      this.i = "X"
      this.dis8 = true
    }
  }

  // input9------------------------------------------------------------------------------------------------------------

  inp9() {
    if (this.i == "0") {
      this.bgColor9 = "blue"
      this.val9 = "X"
      this.i = "X"
      if (((this.val9 == this.val8) && (this.val9 == this.val7)) || ((this.val9 == this.val6) && (this.val9 == this.val3)) || ((this.val9 == this.val5) && (this.val9 == this.val1))) {
        this.crossSweetBox();
        this.disableButton();
      } this.dis9 = true;
    }
    else if (this.i == "X") {
      this.bgColor9 = "orange"
      this.val9 = "0"
      this.i = "0"
      if (((this.val9 == this.val8) && (this.val9 == this.val7)) || ((this.val9 == this.val6) && (this.val9 == this.val3)) || ((this.val9 == this.val5) && (this.val9 == this.val1))) {
        this.zeroSweetBox();
        this.disableButton();
      } this.dis9 = true;
    }
    else {
      this.bgColor9 = "orange"
      this.val9 = "0"
      this.i = "0"
      this.dis9 = true
    }
  }




  ngOnInit(): void {
  }

}
