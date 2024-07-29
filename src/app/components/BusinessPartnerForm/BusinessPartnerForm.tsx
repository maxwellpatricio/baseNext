"use client";
import { useState } from 'react';
import './BusinessPartnerForm.css'

import Input from '../Input';
import Button from '../Button';
import Select from '../Select';

function BusinessPartnerForm() {

    const [cardName, setCardName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [cardType, setCardType] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        console.log('cardName:', cardName);
        console.log('phone:', phone);
        console.log('email:', email);
        console.log('cardType:', cardType);
    };

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>Digite o nome do PN:</label>
                    <Input
                        id="cardName"
                        name="cardName"
                        type="cardName"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        required />
                </div>

                <div>
                    <label>Digite o telefone do PN:</label>
                    <Input
                        id="phone"
                        name="phone"
                        type="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required />

                </div>

                <div>
                    <label>Digite o e-mail do PN:</label>

                    <Input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </div>

                <div>
                    <label>Selecione o tipo do PN:</label>
                    <Select
                        id="cardType"
                        name="cardType"
                        value={cardType}
                        onChange={(e) => setCardType(e.target.value)}
                        required >
                        <option value="C">Cliente</option>
                        <option value="S">Fornecedor</option>
                    </Select>
                </div>

                <Button
                    type="submit"
                >
                    Cadastrar
                </Button>
            </form >
        </>
    );
};

export default BusinessPartnerForm;
