<template>
    <div class="container__countdown">
        <div class="container__minutes" v-if='finish'>
            {{ minutes }} : {{ seconds }}
        </div>
        <div class="container__finish scale-in-center" v-else>
            <h4>TRAINING DONE !</h4>
        </div>
        <div class="container__button">
            <button class="button" @click='playCountDown()' v-if='started'>
                <i class="uil uil-stopwatch benefit__icon"></i>
                START
            </button>
            <button class="button" @click='pauseCountDown()' v-if='pause'>
                <i class="uil uil-pause benefit__icon"></i>
                PAUSE
            </button>
        </div>
    </div>
</template>

<script>
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
    methods: {
        countDownSeconds() {

            if(this.seconds > 0){
                this.seconds--;
            } else {
                this.seconds = 59;
                this.minutes--;
            }

            if(this.minutes == 0 && this.seconds == 0) {
                clearInterval(this.interval);
                this.finish = false;
            }

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
        }
    },
}
</script>


<style scoped>
.container__countdown{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.container__minutes,
.container__seconds{
    font-size: 2rem;
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
    font-size: 1.4rem;
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