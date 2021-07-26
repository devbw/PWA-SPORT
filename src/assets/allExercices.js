const exercices = [
  [
    {
      name: "Jumping Jacks",
      reps: "25",
      muscles: "Cardio",
      category: "bodyweight",
      img:
        "https://www.fitadium.com/img/cms/Bodyweight/05161101-Jumping-Jack_Cardio_small.png",
    },
    {
      name: "Swing",
      reps: "30",
      muscles: "Cardio",
      category: "dumbell",
      img:
        "https://www.fitadium.com/conseils/wp-content/uploads/2020/03/05491105-Kettlebell-Swing_Kettlebell_small.png?frz-v=482",
    },
    {
      name: "Burpees",
      reps: "25",
      muscles: "Cardio",
      category: "bodyweight",
      img:
        "https://www.docteur-fitness.com/wp-content/uploads/2019/08/muscles-sollicites-burpees.png",
    },
    {
      name: "Montée de genoux",
      reps: "30",
      muscles: "Cardio",
      category: "bodyweight",
      img:
        "https://www.gofitnessplan.fr/images/exercises/female/high-knee-run.jpg",
    },
    {
      name: "Mountain Climber",
      reps: "30",
      muscles: "Cardio",
      category: "bodyweight",
      img:
        "https://www.davidroussillon.fr/wp-content/uploads/2015/09/Mountain-climber-exercice-fitness.png",
    },
  ],
  [
    {
      name: "Pompes",
      reps: "10",
      muscles: "Pectoraux",
      category: "bodyweight",
      img:
        "https://musculation-nutrition.fr/wp-content/uploads/2017/12/pompe-classique-pectoraux-exercice-300x250.png",
    },
    {
      name: "Pompes larges",
      reps: "10",
      muscles: "Pectoraux",
      category: "bodyweight",
      img:
        "https://musculation-nutrition.fr/wp-content/uploads/2017/12/pompe-classique-pectoraux-exercice-300x250.png",
    },
    {
      name: "Pompes surélevées",
      reps: "10",
      muscles: "Pectoraux",
      category: "bodyweight",
      img:
        "https://musculation-nutrition.fr/wp-content/uploads/2017/12/pompe-classique-pectoraux-exercice-300x250.png",
    },
    {
      name: "Pompes serrées",
      reps: "10",
      muscles: "Pectoraux",
      category: "bodyweight",
      img:
        "https://musculation-nutrition.fr/wp-content/uploads/2017/12/pompe-classique-pectoraux-exercice-300x250.png",
    },
    {
      name: "Dips chaise",
      reps: "10",
      muscles: "Pectoraux",
      category: "bodyweight",
      img:
        "https://musculation-nutrition.fr/wp-content/uploads/2017/12/pompe-classique-pectoraux-exercice-300x250.png",
    },
    {
      name: "Dips barre",
      reps: "10",
      muscles: "Pectoraux",
      category: "dipsbar",
      img:
        "https://musculation-nutrition.fr/wp-content/uploads/2017/12/pompe-classique-pectoraux-exercice-300x250.png",
    },
  ],
  [
    {
      name: "Pike push-up",
      reps: "10",
      muscles: "Epaules",
      category: "bodyweight",
      img:
        "https://www.mensjournal.com/wp-content/uploads/mf/15-workouts-pikepushup-main-new.jpg?quality=86&strip=all",
    },
    {
      name: "Single arm press",
      reps: "10",
      muscles: "Epaules",
      category: "bodyweight",
      img:
        "https://www.fitadium.com/conseils/wp-content/uploads/2020/03/05391105-Kettlebell-One-Arm-Military-Press-To-The-Side_Shoulders_small.png?frz-v=482",
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
      img: "https://i.ytimg.com/vi/aAErmRDDJKY/maxresdefault.jpg",
    },
    {
      name: "Sumo squat high pull",
      reps: "5",
      muscles: "Epaules",
      category: "dumbell",
      img:
        "https://www.fitadium.com/conseils/wp-content/uploads/2020/03/05481105-Kettlebell-Sumo-High-Pull_back_small.png?frz-v=482",
    },
  ],
  [
    {
      name: "Squat",
      reps: "20",
      muscles: "Jambes",
      category: "bodyweight",
      img:
        "https://img-4.linternaute.com/-xJtdqszf0oWjox4t1Tzot5wav4=/1500x/smart/6cb68a39a9e04f249f5f07494f722e96/ccmcms-linternaute/10763352.jpg",
    },
    {
      name: "Goblet squat",
      reps: "20",
      muscles: "Jambes",
      category: "dumbell",
      img:
        "https://images.squarespace-cdn.com/content/v1/590a5ba12994caa0d30916a1/1493853039281-MN1H7RYYBNW7ZIP0XMFM/Image-369.jpg",
    },
    {
      name: "Squat sautés",
      reps: "20",
      muscles: "Jambes",
      category: "bodyweight",
      img: "https://passimale.fr/wp-content/uploads/2020/12/squat-saute.jpg",
    },
    {
      name: "Pistol squat",
      reps: "20",
      muscles: "Jambes",
      category: "bodyweight",
      img:
        "http://www.thenewpotato.com/wp-content/uploads/2016/01/Pistol_Squat-620x360.jpg",
    },
    {
      name: "Fentes",
      reps: "20",
      muscles: "Jambes",
      category: "bodyweight",
      img: "https://mon-ideal.com/wp-content/uploads/2019/02/Fentes.jpg",
    },
    {
      name: "Overhead lunge",
      reps: "20",
      muscles: "Jambes",
      category: "dumbell",
      img: "https://i.ytimg.com/vi/J3DxelcaaMU/maxresdefault.jpg",
    },
    {
      name: "Overhead squat",
      reps: "15",
      muscles: "Jambes",
      category: "dumbell",
      img:
        "https://www.fitadium.com/conseils/wp-content/uploads/2020/03/15661105-Kettlebell-One-Arm-Overhead-Squat_Thighs_Shoulders_small.png?frz-v=482",
    },
    {
      name: "Fentes bulgares",
      reps: "20",
      muscles: "Jambes",
      category: "bodyweight",
      img:
        "http://www.fitnition.fr/wp-content/uploads/2018/05/Fentes-halt%C3%A8res-avec-banc-Musculation-Jambes-quadriceps-compressor-600x400.png",
    },
    {
      name: "Single leg deadlift",
      reps: "20",
      muscles: "Jambes",
      category: "dumbell",
      img:
        "https://www.fitadium.com/conseils/wp-content/uploads/2020/03/15691105-Kettlebell-One-Legged-Deadlift_Hips_small.png?frz-v=482",
    },
    {
      name: "Fentes sautées",
      reps: "20",
      muscles: "Jambes",
      category: "bodyweight",
      img:
        "https://www.litobox.com/wp-content/uploads/2018/09/fentes-sautees-exercice-730x487.png",
    },
  ],
  [
    {
      name: "Crunch",
      reps: "20",
      muscles: "Abdos",
      category: "bodyweight",
      img: "https://i.ytimg.com/vi/C0NQqI9YeyQ/maxresdefault.jpg",
    },
    {
      name: "Relevé de jambes couché",
      reps: "20s",
      muscles: "Abdos",
      category: "bodyweight",
      img:
        "https://femme.fitness/wp-content/uploads/2018/07/brand-elevation-jambes-700x350.png",
    },
    {
      name: "Planche",
      reps: "45s",
      muscles: "Abdos",
      category: "bodyweight",
      img:
        "https://archzine.fr/wp-content/uploads/2020/04/astuces-comment-perdre-du-ventre-rapidement-exercice-planche-chez-soi-idee-entrainement-a-la-maison.jpg",
    },
    {
      name: "Relevé de jambes barre",
      reps: "10",
      muscles: "Abdos",
      category: "pullupbar",
      img:
        "https://archzine.fr/wp-content/uploads/2020/04/astuces-comment-perdre-du-ventre-rapidement-exercice-planche-chez-soi-idee-entrainement-a-la-maison.jpg",
    },
  ],
  [
    {
      name: "Tractions supination",
      reps: "10",
      muscles: "Dos",
      category: "pullupbar",
      img:
        "https://www.histoiresdepompiers.fr/wp-content/uploads/2017/06/8685625-13711505.jpg",
    },
    {
      name: "Rowing",
      reps: "15",
      muscles: "Dos",
      category: "dumbell",
      img:
        "https://www.fitadium.com/conseils/wp-content/uploads/2020/03/13451105-Kettlebell-Two-Arm-Row_Back_small.png?frz-v=482",
    },
    {
      name: "Tractions pronation",
      reps: "10",
      muscles: "Dos",
      category: "pullupbar",
      img:
        "https://fitness-life.fr/wp-content/uploads/2018/01/Traction-prise-large-Fitness-Life.jpg",
    },
    {
      name: "Tractions prise large",
      reps: "10",
      muscles: "Dos",
      category: "pullupbar",
      img:
        "https://fitness-life.fr/wp-content/uploads/2018/01/Traction-prise-large-Fitness-Life.jpg",
    },
    {
      name: "Tractions prise serrée",
      reps: "10",
      muscles: "Dos",
      category: "pullupbar",
      img:
        "https://fitness-life.fr/wp-content/uploads/2018/01/Traction-prise-large-Fitness-Life.jpg",
    },
    {
      name: "Shrug",
      reps: "10",
      muscles: "Dos",
      category: "dumbell",
      img:
        "https://i1.wp.com/weighttraining.guide/wp-content/uploads/2016/10/dumbbell-shrug-990x894.png?resize=990%2C894",
    },
  ],
];

export default {
  exercices,
};
