import React from 'react';

const ThanksModal = () => {
    return (
                <div className="modal fade" id="ignismyModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label=""><span>×</span></button>
                            </div>
                            <div className="modal-body">
                                <div className="thank-you-pop">
                                    <img src="http://goactionstations.co.uk/wp-content/uploads/2017/03/Green-Round-Tick.png" alt="" />
                                    <h1>Thank You!</h1>
                                    <p>Your submission is received and we will contact you soon</p>
                                    <h3 className="cupon-pop">Your Id: <span>12345</span></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
};

export default ThanksModal;