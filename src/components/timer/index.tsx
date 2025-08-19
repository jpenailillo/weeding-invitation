import Dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import { StyledTimer } from './style';


export interface TimerProps {
	date: Dayjs.Dayjs;
};

export const Timer: React.FC<TimerProps> = ({ date }) => {
	const [days, setDays] = useState(0);
	const [hours, setHours] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [seconds, setSeconds] = useState(0);
	const calculateTime = () => {
		const now = Dayjs();
		const diff = date.diff(now, 'seconds');
		if (diff < 0) {
			setDays(0);
			setHours(0);
			setMinutes(0);
			setSeconds(0);
			return;
		}
		const totalSeconds = Math.floor(diff);
		const totalMinutes = Math.floor(totalSeconds / 60);
		const totalHours = Math.floor(totalMinutes / 60);
		const totalDays = Math.floor(totalHours / 24);
		setDays(totalDays);
		setHours(totalHours % 24);
		setMinutes(totalMinutes % 60);
		setSeconds(totalSeconds % 60);
	};
	useEffect(() => {
		const interval = setInterval(() => {
			calculateTime();
		}, 1000);
		return () => clearInterval(interval);
	}, [date]);

	return (
    <StyledTimer className='flex flex-center font-[Playfair_Display]'>
      <div className='flex flex-column'>
        <h3 className='text-center'>DIAS</h3>
        <div className='flex flex-center number-container'>
					{days > 99 && (
						<div className='number flex flex-middle'>{Math.floor(days / 100)}</div>
					)}
          <div className='number flex flex-middle'>
            {days > 10 ? Math.floor(days % 100 / 10) : 0}
          </div>
          <div className='number flex flex-middle'>{days % 10}</div>
        </div>
      </div>
      <p>:</p>
      <div className='flex flex-column'>
        <h3 className='text-center'>HORAS</h3>
        <div className='flex flex-center number-container'>
          <div className='number flex flex-middle'>
            {hours > 10 ? Math.floor(hours / 10) : 0}
          </div>
          <div className='number flex flex-middle'>{hours % 10}</div>
        </div>
      </div>
      <p>:</p>
      <div className='flex flex-column'>
        <h3 className='text-center'>MINUTOS</h3>
        <div className='flex flex-center number-container'>
          <div className='number flex flex-middle'>
            {minutes > 10 ? Math.floor(minutes / 10) : 0}
          </div>
          <div className='number flex flex-middle'>{minutes % 10}</div>
        </div>
      </div>
      <p>:</p>
      <div className='flex flex-column'>
        <h3 className='text-center'>SEGUNDOS</h3>
        <div className='flex flex-center number-container'>
          <div className='number flex flex-middle'>
            {seconds > 10 ? Math.floor(seconds / 10) : 0}
          </div>
          <div className='number flex flex-middle'>{seconds % 10}</div>
        </div>
      </div>
    </StyledTimer>
  );
};
