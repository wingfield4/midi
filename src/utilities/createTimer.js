const createTimer = ({
  /* COMMON CONFIG */
  onTick = () => {},
  interval = 100,
  events = [],
  endAfterEvents = false,
  repeat = false,

  /* UNCOMMON CONFIG  */
  refreshInterval = 50,
}) => {
  const timer = {
    start: () => {
      timer.events.sort(event => {
        //sort by start time
      });

      timer.mode = modes.RUNNING;
      timer.startedAt = Date.now();
      let nextExpectedTime = Date.now() + interval;
      setTimeout(() => timer.tick(nextExpectedTime), interval);
    },
    stop: () => {
      timer.mode = modes.STOPPED;
    },
    pause: () => {
      timer.mode = modes.PAUSED;
    },
    tick: (expectedTime) => {
      timer.elapsedTime = Date.now() - timer.startedAt; 

      //do tick
      onTick({
        elapsedTime: timer.elapsedTime
      });

      //trigger events
      while(timer.events.length > 0 && timer.events[0].triggerAt <= timer.elapsedTime) {
        let event = timer.events.shift();
        if(event.onTrigger){
          event.onTrigger();
        }
      }

      //end if no more event (if that's what we want)
      if(timer.events.length === 0) {
        if(endAfterEvents) {
          timer.stop();
        } else if(repeat) {
          timer.events = timer.eventsCopy.concat([]);
          timer.elapsedTime = 0;
          timer.startedAt = Date.now();
        }
      }
      
      //schedule next tick
      if(timer.mode === modes.RUNNING) {
        let nextInterval = timer.events.length > 0 ? Math.min(interval, timer.events[0].triggerAt - timer.elapsedTime) : interval;
        let nextExpectedTime = expectedTime + nextInterval;
        setTimeout(() => {
          timer.tick(nextExpectedTime);
        }, nextExpectedTime - Date.now());
      }
    },

    eventsCopy: events.concat([]),
    mode: modes.STOPPED,
    startedAt: null,
    elapsedTime: 0,
    events
  };

  return timer;
};

export default createTimer;

const modes = {
  RUNNING: 1,
  PAUSED: 2,
  STOPPED: 3
};
