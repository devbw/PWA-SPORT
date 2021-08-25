const exercices = [
  {
    name: "Jumping Jacks",
    reps: "25",
    muscles: "Cardio",
    category: "bodyweight",
    img:
      "https://i.pinimg.com/originals/34/cb/99/34cb992c8c0c57e896a22c1036a7c038.gif",
  },
  {
    name: "Swing",
    reps: "30",
    muscles: "Cardio",
    category: "dumbell",
    img:
      "https://cdn.vnexplorer.net/master/uploads/2021/07/19154800/kettlebell-exercises-benefits-and-8-effective-workouts1626680880.jpg",
  },
  {
    name: "Burpees",
    reps: "25",
    muscles: "Cardio",
    category: "bodyweight",
    img:
      "https://c.tenor.com/u2-VJiigKCkAAAAC/exercise-jump.gif",
  },
  {
    name: "Montée de genoux",
    reps: "30",
    muscles: "Cardio",
    category: "bodyweight",
    img:
      "https://www.foodspring.de/magazine/wp-content/uploads/2020/11/Fatburn_Workout_High-Knees_%C2%A9foodspring.gif",
  },
  {
    name: "Mountain Climber",
    reps: "30",
    muscles: "Cardio",
    category: "bodyweight",
    img:
      "https://media1.popsugar-assets.com/files/thumbor/Iu8waoj6rmL6c7B8gZUdS1ZIa3I/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/06/08/791/n/1922729/c4943793a2ba2dd5_SlowerClimbers.gif",
  },
  {
    name: "Pompes",
    reps: "10",
    muscles: "Pectoraux",
    category: "bodyweight",
    img:
      "https://thumbs.gfycat.com/GlossySkinnyDuckbillcat-max-1mb.gif",
  },
  {
    name: "Pompes claquées",
    reps: "10",
    muscles: "Pectoraux",
    category: "bodyweight",
    img:
      "https://thumbs.gfycat.com/GlossySkinnyDuckbillcat-max-1mb.gif",
  },
  {
    name: "Pompes larges",
    reps: "10",
    muscles: "Pectoraux",
    category: "bodyweight",
    img:
      "https://flabfix.com/wp-content/uploads/2019/08/Wide-Grip-Push-Ups.gif",
  },
  {
    name: "Pompes surélevées",
    reps: "10",
    muscles: "Pectoraux",
    category: "bodyweight",
    img:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/feetelevatedpushup-1457047025.gif",
  },
  {
    name: "Pompes serrées",
    reps: "10",
    muscles: "Pectoraux",
    category: "bodyweight",
    img:
      "https://flabfix.com/wp-content/uploads/2019/05/Close-Grip-Push-Ups.gif",
  },
  {
    name: "Dips chaise",
    reps: "10",
    muscles: "Pectoraux",
    category: "bodyweight",
    img:
      "https://thumbs.gfycat.com/FittingImpassionedAmethystinepython-max-1mb.gif",
  },
  {
    name: "Dips barre",
    reps: "10",
    muscles: "Pectoraux",
    category: "dipsbar",
    img:
      "https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/dips.gif",
  },
  {
    name: "Renegade Row",
    reps: "10",
    muscles: "Pectoraux",
    category: "dumbell",
    img:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/90-renegade-rows-lr-1579279878.gif",
  },
  {
    name: "Pike push-up",
    reps: "10",
    muscles: "Epaules",
    category: "bodyweight",
    img:
      "https://lh3.googleusercontent.com/proxy/LKm5RFWVyVOYfuFyZeWlStvoJ5FY28dExEtiRnMNpfX-JjKe1P6CxvnOGI4KjLZOGssPpvjqYiDv3g1zQsencqGh6vQ7cNZdZRZ0P-PcFIte2A",
  },
  {
    name: "Single arm press",
    reps: "10",
    muscles: "Epaules",
    category: "dumbell",
    img:
      "https://i.pinimg.com/originals/d8/03/50/d80350c686ea43cf31397589efa47e06.gif",
  },
  {
    name: "Handstand",
    reps: "30s",
    muscles: "Epaules",
    category: "bodyweight",
    img:
      "https://images.squarespace-cdn.com/content/v1/5d31ed671abe780001b2964d/1564527355472-A8QA0TTO82U1GR2ND26D/handstand+tutorial",
  },
  {
    name: "Handstand push-up",
    reps: "5",
    muscles: "Epaules",
    category: "bodyweight",
    img: "https://qph.fs.quoracdn.net/main-qimg-5cf8eb52b6f648da2103ee0c9f7a4d90",
  },
  {
    name: "Sumo squat high pull",
    reps: "5",
    muscles: "Epaules",
    category: "dumbell",
    img:
      "https://i0.wp.com/post.greatist.com/wp-content/uploads/sites/2/2019/05/KETTLEBELLS_SUMO-DEADLIFT-HIGHPULL_0.gif",
  },
  {
    name: "Squat",
    reps: "20",
    muscles: "Jambes",
    category: "bodyweight",
    img:
      "https://flabfix.com/wp-content/uploads/2019/08/Air-Squat.gif",
  },
  {
    name: "Goblet squat",
    reps: "20",
    muscles: "Jambes",
    category: "dumbell",
    img:
      "https://i.pinimg.com/originals/63/be/5f/63be5f70cad75c78074a6201a854030c.gif",
  },
  {
    name: "Squat sautés",
    reps: "20",
    muscles: "Jambes",
    category: "bodyweight",
    img: "https://thumbs.gfycat.com/YellowishExhaustedDodo-size_restricted.gif",
  },
  {
    name: "Pistol squat",
    reps: "20",
    muscles: "Jambes",
    category: "bodyweight",
    img:
      "https://thumbs.gfycat.com/SilkyRipeCopperhead-max-1mb.gif",
  },
  {
    name: "Fentes",
    reps: "20",
    muscles: "Jambes",
    category: "bodyweight",
    img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/gobletsplitsquat-1457030805.gif",
  },
  {
    name: "Overhead lunge",
    reps: "20",
    muscles: "Jambes",
    category: "dumbell",
    img: "https://i.pinimg.com/originals/0d/b0/ae/0db0ae4069133afe9668d0ac910b7f26.gif",
  },
  {
    name: "Overhead squat",
    reps: "15",
    muscles: "Jambes",
    category: "dumbell",
    img:
      "https://thumbs.gfycat.com/ClumsyScalyHoneyeater-size_restricted.gif",
  },
  {
    name: "Fentes bulgares",
    reps: "20",
    muscles: "Jambes",
    category: "bodyweight",
    img:
      "https://i.pinimg.com/originals/fc/e4/2d/fce42d442865e2a935e39186e4635a11.gif",
  },
  {
    name: "Single leg deadlift",
    reps: "20",
    muscles: "Jambes",
    category: "dumbell",
    img:
      "https://thumbs.gfycat.com/IcyLiveChimneyswift-size_restricted.gif",
  },
  {
    name: "Fentes sautées",
    reps: "20",
    muscles: "Jambes",
    category: "bodyweight",
    img:
      "https://i.pinimg.com/originals/0c/50/ef/0c50ef18bc7a201683796e8bf05b1ed9.gif",
  },

  {
    name: "Crunch",
    reps: "20",
    muscles: "Abdos",
    category: "bodyweight",
    img: "https://i.imgur.com/UJAnRhJ.gif",
  },
  {
    name: "Kettlebell Crunch",
    reps: "20",
    muscles: "Abdos",
    category: "dumbell",
    img: "https://thumbs.gfycat.com/AgedWholeChinesecrocodilelizard-max-1mb.gif",
  },
  {
    name: "Relevé de jambes couché",
    reps: "20",
    muscles: "Abdos",
    category: "bodyweight",
    img:
      "http://www.foodspring.de/magazine/wp-content/uploads/2020/11/Leg-raises-Giannis.gif",
  },
  {
    name: "Russian twist",
    reps: "20",
    muscles: "Abdos",
    category: "bodyweight",
    img:
      "https://j.gifs.com/mwy1v0@large.gif",
  },
  {
    name: "Planche",
    reps: "45s",
    muscles: "Abdos",
    category: "bodyweight",
    img:
      "https://i.pinimg.com/originals/cf/b5/67/cfb5677a755fe7288b608a4fec6f09a0.gif",
  },
  {
    name: "Relevé de jambes barre",
    reps: "10",
    muscles: "Abdos",
    category: "pullupbar",
    img:
      "https://musclewiki.com/media/uploads/bodyweight-male-hanging-knee-raises-front.gif",
  },
  {
    name: "Russian twist kettlebell",
    reps: "10",
    muscles: "Abdos",
    category: "dumbell",
    img:
      "https://i.pinimg.com/originals/e4/4a/01/e44a01b076cef93b6042b65f15b3b6a5.gif",
  },

  {
    name: "Tractions supination",
    reps: "10",
    muscles: "Dos",
    category: "pullupbar",
    img:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/chinup-1457101678.gif?crop=1xw:1xh;center,top&resize=480:*",
  },
  {
    name: "Rowing",
    reps: "15",
    muscles: "Dos",
    category: "dumbell",
    img:
      "https://c.tenor.com/XehF1R8EzM4AAAAC/dumbbell-row.gif",
  },
  {
    name: "Superman",
    reps: "15",
    muscles: "Dos",
    category: "bodyweight",
    img:
      "https://flabfix.com/wp-content/uploads/2019/05/Superman.gif",
  },
  {
    name: "Tractions pronation",
    reps: "10",
    muscles: "Dos",
    category: "pullupbar",
    img:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/pullup-1456956490.gif?crop=1xw:1xh;center,top&resize=480:*",
  },
  {
    name: "Tractions prise large",
    reps: "10",
    muscles: "Dos",
    category: "pullupbar",
    img:
      "https://cdn.shopify.com/s/files/1/1501/0558/files/WidePullUps.gif",
  },
  {
    name: "Tractions prise serrée",
    reps: "10",
    muscles: "Dos",
    category: "pullupbar",
    img:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/workouts/2016/03/closegripchinup-1456956391.gif",
  },
  {
    name: "Shrug",
    reps: "10",
    muscles: "Dos",
    category: "dumbell",
    img:
      "https://c.tenor.com/uMNZPBaaTPYAAAAC/dumbbell-shrug.gif",
  },
];

export default exercices;
