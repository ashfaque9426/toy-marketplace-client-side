// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import './FigureCardForHome.css'
import Button from 'react-bootstrap/Button';
import ModalForHomePage from '../ModalForHomePage/ModalForHomePage';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const FigureCardForHome = ({tabData}) => {
    const {user} = useContext(AuthContext);
    const [modalShow, setModalShow] = useState(false);
    const [singletoydata, setSingleToyData] = useState({});
    const {_id, imgUrl, toyName, price, rating} = tabData;
    const navigate = useNavigate();

    const handleModalShow = () => {
        if(user === null) {
            navigate('/login', { replace: true });
            return toast("You Have to login to view more info");
        }

        fetch(`https://b7a11-toy-marketplace-server-side-ashfaque9426-hko3p6w1c.vercel.app/singleToyDetail/${_id}`)
        .then(res => res.json())
        .then(itemData => setSingleToyData(itemData))

        setModalShow(true);
    }
    return (
        <div className="cols mb-4">
            <article className='figureCard'>
                <figure style={{ height: "250px" }}>
                    <img className='w-100 h-100' src={imgUrl} alt={`${toyName} + Action Figure Image`} />
                </figure>
                <section>
                    <h5 className='fs-6 fw-semibold mb-3'>{toyName}</h5>
                    <div className='d-flex justify-content-between'>
                        <p className='p-0 m-0 me-1 fs-6'><span className='fw-semibold me-2'>Price: <span className='fw-bold'>${price}</span></span> <span className='fw-semibold'>Rating: <span className='fw-bold'>{rating}</span></span></p>
                        <Button className='btn btn-dark' onClick={handleModalShow}>
                            View Details
                        </Button>
                        <ModalForHomePage
                            singletoydata={singletoydata}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                </section>
            </article>
        </div>
    );
};

export default FigureCardForHome;