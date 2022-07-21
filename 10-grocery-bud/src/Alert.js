import React, { useEffect } from 'react';

const Alert = ({alert, tasks, removeAlert}) => {
        useEffect(()=>{
            const timeout = setTimeout(() => {
                removeAlert();
              }, 3000);
            return () => clearTimeout(timeout);
        }, [tasks]);
        return <p className={`p alert-${alert.type}`}>{alert.msg}</p>;
};

export default Alert;