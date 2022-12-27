function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const Pads = [
{
  key: "Q",
  samp: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  title: "Heater 1" },

{
  key: "W",
  samp: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  title: "Heater 2" },

{
  key: "E",
  samp: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  title: "Heater 3" },

{
  key: "A",
  samp: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  title: "Heater 4" },

{
  key: "S",
  samp: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  title: "Clap" },

{
  key: "D",
  samp: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  title: "Open-HH" },

{
  key: "Z",
  samp: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  title: "Kick-n'-Hat" },

{
  key: "X",
  samp: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  title: "Kick" },

{
  key: "C",
  samp: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  title: "Closed-HH" }];



class DrumMachine extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "playAudio",






    ev => {
      const audio = ev.target.querySelector("audio");

      this.setState({
        display: audio.dataset.title });


      audio.play();
    });_defineProperty(this, "playKey",
    ev => {
      const key = ev.key.toUpperCase();
      const pad = document.querySelector(`.drum-pad#${key}`);
      if (pad) pad.click();
    });this.state = { display: "DrumPad" };}
  render() {
    document.addEventListener("keydown", this.playKey);
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("div", { id: "pad-bank" },
      Pads.map((pad) => /*#__PURE__*/
      React.createElement(DrumPad, {
        keypad: pad.key,
        src: pad.samp,
        handle: this.playAudio,
        title: pad.title }))), /*#__PURE__*/



      React.createElement("div", { id: "pad-controller" }, /*#__PURE__*/
      React.createElement("p", { id: "display" }, this.state.display))));



  }}


const DrumPad = ({ keypad, src, handle, title }) => {
  return /*#__PURE__*/(
    React.createElement("button", { type: "button", className: "drum-pad", id: keypad, onClick: handle }, /*#__PURE__*/
    React.createElement("audio", { className: "clip", src: src, id: keypad, "data-title": title }),
    keypad));


};
ReactDOM.render( /*#__PURE__*/React.createElement(DrumMachine, null), document.querySelector(".app"));