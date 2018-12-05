import React from 'react';
import medicineApi from '../../../api/medicine';
import { deriveTypesForMedicine, deriveStrengthsForMedicineAndType } from '../../../services/medicine';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import chevronIcon from '../../../icons/chevron.svg';
import closeIcon from '../../../icons/close.svg';

export default class MedicineSpecModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: '',
            selectedTypeValue: '',
            selectedStrengthValue: ''
        }

        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleStrengthChange = this.handleStrengthChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
    }

    handleTypeChange(e) {
        const { medicineName } = this.props;
        const selectedTypeValue = e.target.value;
        this.setState(() => {
            return { selectedTypeValue };
        });
        medicineApi.get()
            .then((resultContainer) => resultContainer.results)
            .then((medicines) => {
                return deriveStrengthsForMedicineAndType(medicineName, selectedTypeValue, medicines);
            }).then((strengths) => {
                this.setState(() => {
                    return { strengths };
                })
            })
    }

    handleStrengthChange(e) {
        const selectedStrengthValue = e.target.value;
        this.setState(() => {
            return { selectedStrengthValue };
        });
    }

    handleQuantityChange(e) {
        const quantity = e.target.value;
        this.setState(() => {
            return { quantity };
        });
    }

    componentDidMount() {
        const { medicineName } = this.props;
        medicineApi.get()
            .then((resultContainer) => resultContainer.results)
            .then((medicines) => {
                return deriveTypesForMedicine(medicineName, medicines);
            }).then((types) => {
                this.setState(() => {
                    return { types };
                })
            })
    }

    render() {
        const {
            types,
            strengths,
            selectedTypeValue,
            selectedStrengthValue,
            quantity
        } = this.state;

        const { isOpen, onToggle } = this.props;

        const closeBtn = (
            <div className='closeCon'>
                <img className="close"
                    onClick={onToggle}
                    src={closeIcon} /></div>
        );

        return (
            <Modal isOpen={isOpen} toggle={onToggle} wrapClassName="medicineSpecModal">
                <ModalHeader toggle={onToggle} close={closeBtn}>
                    Amoxicillin
                    </ModalHeader>
                <ModalBody>
                    <form>
                        <div className="form-group" disabled={!types || !types.length}>
                            <label htmlFor="typeSelect">Type<img src={chevronIcon} alt="Type" /></label>
                            <select className="form-control"
                                value={selectedTypeValue}
                                id="typeSelect"
                                onChange={this.handleTypeChange}
                                disabled={!types || !types.length}>
                                <option value=''>Choose a type</option>
                                {types && types.length && types.length > 0 && types.map((t) => {
                                    return (<option value={t} key={t}>{t}</option>);
                                })}
                            </select>
                        </div>
                        <div className="form-group" disabled={!selectedTypeValue || !strengths || !strengths.length}>
                            <label htmlFor="strengthSelect">Strength<img src={chevronIcon} alt="Strength" /></label>
                            <select className="form-control"
                                value={selectedStrengthValue}
                                id="strengthSelect"
                                onChange={this.handleStrengthChange}
                                disabled={!selectedTypeValue || !strengths || !strengths.length}>
                                <option value=''>Choose a strength</option>
                                {strengths && strengths.length && strengths.length > 0 && strengths.map((s) => {
                                    return (<option value={s} key={s}>{s}</option>);
                                })}
                            </select>
                        </div>
                        <div className="form-group" disabled={!selectedStrengthValue}>
                            <label htmlFor="quantityInput">Quantity</label>
                            <input type="text"
                                className="form-control"
                                id="quantityInput"
                                onChange={this.handleQuantityChange}
                                disabled={!selectedStrengthValue}
                                value={quantity} />
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary"
                        disabled={!quantity}
                        onClick={onToggle}>Add to basket</button>

                </ModalFooter>
            </Modal>
        );
    }
}