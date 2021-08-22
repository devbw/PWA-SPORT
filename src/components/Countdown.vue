<template>
    <div class="countdown__block">
        <div class="container__button">
            <button class="trigger" @click='playCountDown()' v-if='started'>
                <i class="fas fa-play"></i>
            </button>
            <button class="trigger" @click='pauseCountDown()' v-if='pause'>
                <i class="fas fa-pause"></i>
            </button>
        </div>
        <div class="container__minutes" v-if='finish'>
            {{ minutes }} : {{ seconds }}
        </div>
        <div class="container__finish scale-in-center" v-else>
            <h4>TRAINING DONE !</h4>
        </div>
        <div class="container__button">
            <button class="trigger" @click="redirect()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    </div>
</template>

<script>
import decrementSeconds from '@/services/countdown.js'

export default {
    name: 'Countdown',
    props: {
        defaultMinutes: {
            type: Number,
            default: 30,
        },
    },
    data() {
        return {
            minutes: this.defaultMinutes,
            seconds:0,
            interval:'',
            finish: true,
            started: true,
            pause: false,
        }
    },
    created() {
        this.display();
    },
    methods: {
        countDownSeconds() {
            let {seconds, minutes} = decrementSeconds(this.minutes, this.seconds)

            this.minutes = minutes;
            this.seconds = seconds;

            if(this.minutes == 0 && this.seconds == 0) {
                clearInterval(this.interval);
                this.finish = false;
            }

            this.display();
        },
        playCountDown() {
            this.interval = setInterval(() => this.countDownSeconds(), 1000);
            this.started = false;
            this.pause = true;
        },
        pauseCountDown() {
            clearInterval(this.interval);
            this.started = true;
            this.pause = false;
        },
        display() {
            if(this.seconds < 10) {
                this.seconds = "0" + this.seconds;
            }
        },
        redirect() {
            this.$router.push("/home-training");
        },
    },
}
</script>


<style scoped>
.countdown__block{
  border: 2px solid #B800C2;
  box-sizing: border-box;
  border-radius: 20px 20px 0 0;
  margin-top: 1rem;
  width: 100%;
  padding: .8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(3px);
}
.trigger{
    border: 2px #B800C2 solid;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    background-color: #010030;
}
.container__countdown{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.container__minutes,
.container__seconds{
    font-size: 2rem;
    color: white;
}
.divider{
    margin: 0 .5rem 0 .5rem;
    padding-bottom: .2rem;
}
.benefit__icon{
    font-size: 1.7rem;
    margin: 0 .5rem 0 .5rem;
    color: rgba(255, 255, 255, 0.37);
}
h4{
    color: #B800C2;
    font-size: 1.2rem;
    margin: 0;
}
.fas{
    color: white;
    font-size: 1.1rem;
}
.fa-times{
    font-size: 1.3rem;
}
.scale-in-center {
	-webkit-animation: scale-in-center 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	animation: scale-in-center 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
@-webkit-keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
}
</style>