(() => {
  const counters = [document.getElementById('counter-0')]
  const subtitle = document.getElementById('subtitle')

  const getDateDifference = (startDate: Date, endDate: Date): number => {
    const oneDay = 24 * 60 * 60 * 1000;
    const startUTC = Date.UTC(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate()
    );
    const endUTC = Date.UTC(
      endDate.getFullYear(),
      endDate.getMonth(),
      endDate.getDate()
    );

    return Math.floor((endUTC - startUTC) / oneDay);
  };



  const numDigits = (number: number): number => {
    return Math.abs(number).toString().replace(/0+$/, '').length;
  };

  const getNthDigit = (number: number, n: number): number | null => {
    const numberString = Math.abs(number).toString();
    const nthDigitFromRight = numberString[numberString.length - n];

    return nthDigitFromRight ? parseInt(nthDigitFromRight) : null;
  };

  const setDigit = (element: HTMLElement, value: any): void => {
    const elem = element.querySelector('.counter-inner-num') as HTMLDivElement;
    if (!elem) return;
    elem.innerText = value.toString();
  };

  const updateCounter = (lastDate: Date): void => {
    const delta = getDateDifference(lastDate, new Date());
    const digits = numDigits(delta);
    const baseDigit = counters[0];

    if (!baseDigit) return;

    setDigit(baseDigit, getNthDigit(delta, 1));

    if (digits > 0) {
      for (let i = 1; i <= digits; i++) {
        const newDigit = baseDigit.cloneNode(true) as HTMLElement;
        newDigit.id = `counter-${i}`;
        setDigit(newDigit, getNthDigit(delta, i + 1));
        baseDigit.parentElement?.appendChild(newDigit);
      }
    }
  };


  // https://stackoverflow.com/a/3177838
  const timeSince = (date: Date): string => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

    let interval = seconds / 31536000;

    if (interval > 1) {
      return `${Math.floor(interval)} years`;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return `${Math.floor(interval)} months`;
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return `${Math.floor(interval)} days`;
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return `${Math.floor(interval)} hours`;
    }
    interval = seconds / 60;
    if (interval > 1) {
      return `${Math.floor(interval)} minutes`;
    }
    return `${Math.floor(seconds)} seconds`;
  };


  fetch('/~cbradley/data/lab_outages.json')
    .then((res) => res.json())
    .then((data) => {
      const epoch = parseInt(data['aliveSince'], 10) * 1000
      updateCounter(new Date(epoch))

      const lastCheck = new Date(data['lastCheck'] * 1000)
      if (!subtitle) return
      subtitle.innerText = `Last checked ${timeSince(lastCheck)} ago.`
    })
})();