import { Router } from 'express';
import path from 'path';
import sound from 'sound-play';
import { cancelable, CancelablePromise } from 'cancelable-promise';
import playSound from 'play-sound'
import { Console } from 'console';
import fs from 'fs';
import { json } from 'stream/consumers';






const musicsJSON = require('../data/musics.json');
const { getAudioDurationInSeconds } = require('get-audio-duration')
const arrMusics:any[] = [];
const playing:boolean = false;

const playMusicRouter = Router();

const musicsPlaying: any[] = []

playMusicRouter.post('/', async (req, res) => {
  const { music } = req.body
  const musicPath = path.join(__dirname, "..", "musics", `${music}.mp3`);
  arrMusics.push(req.body);
  console.log(arrMusics);

  let musi:string = "";

  arrMusics.forEach(item => {
    musi = item.music;
    musi.toString()
    console.log()
    
  });



  fs.appendFile('teste.txt', musi.toString()+'\n' , function (err) {
    if (err) return console.log(err);
  });
  musi = "";

  
  // try {
  //   res.json({
  //     name: music,
  //     playing: true,
  //   })

  // getAudioDurationInSeconds(musicPath).then((duration: any) => {
  //   console.log(duration);
  // })

  // console.log(musicPath)
  //   const teste = playSound({}).play(musicPath, function(err){
  //     console.log('ENTROU NO FUNC')

  //     console.log( err.killed );
  //     if (err && !err.killed) throw err
  //   })

  //   setTimeout(() => {
  //     console.log('entrou aqui')
  //     teste.kill()
  //   }, 2000)

  // // getAudioDurationInSeconds(musicPath).then((duration: any) => {
  // //   console.log(duration);
  // // })

  
  // // const promises = [
  // //   cancelable(new Promise((resolve) => setTimeout(resolve, 1))),
  // //   new CancelablePromise((resolve) => setTimeout(resolve, 1)),
  // // ];



  // } catch (error) {
  //   console.log('error', error)
  //   res.json({
  //     name: music,
  //     playing: false,
  //     error
  //   })
  // }
})

playMusicRouter.get('/musics', async (req, res) => res.json(musicsJSON));


playMusicRouter.get('/listMusics', async (req, res) => {
  res.json({
    musics:musicsPlaying
  });
  console.log('bateu');
});







export { playMusicRouter }