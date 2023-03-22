import { useQuery } from '@tanstack/react-query';
import React from 'react';
import HistoryDetails from './HistoryDetails';
import PatientInfo from './PatientInfo';
import PrescriptionDetails from './PrescriptionDetails';

const ActivityLog = () => {
    const { data: patientInfo = [], isLoading} = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(`http://hospital.rushdi.pw/api/patient/list`);
            const data = await res.json();
            return data[3];// taking only one patient
        }
    });

    return (
        <div className='container' >
            <h1 className='text-center my-3 font-bold fw-bold'>Nursing Log</h1>


            <div className="row">
                <div className="col-md-7">
                    <PatientInfo patientInfo={patientInfo} isLoading={isLoading} />
                    <PrescriptionDetails />
                </div>
                <div className="col-md-5 position-relative">
                    <HistoryDetails />
                </div>
            </div>


        </div>
    );
};

export default ActivityLog;