class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if(!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        let existingAlarm = this.alarmCollection.some(alarm => alarm.time === time);
        if(existingAlarm) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({
            time: time,
            callback: callback, 
            canCall: true
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        let now = new Date();
        let hours = now.getHours().toString().padStart(2, "0");
        let minutes = now.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    }

    start() {
        if(this.intervalId) {
            return;
        }

        this.intervalId = setInterval(() => {
            let currentTime = this.getCurrentFormattedTime();

            this.alarmCollection.forEach(alarm => {
                if(alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false;
                    alarm.callback();
                }
            })
        }, 1000);
    }

    stop() {
        if(this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => alarm.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}