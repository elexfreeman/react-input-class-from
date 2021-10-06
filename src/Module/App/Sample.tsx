import React, { Component, Fragment } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Subject } from 'rxjs';
import { Switch, Route, withRouter, } from 'react-router-dom';
import { StoreStateI } from '../../Store/Store';
import { fSetCalc } from '../../StoreCalc/Action';

import { Calculator } from '../Calculator';
import { Business } from '../Business';
import { Evotor5 } from '../Product/Evotor/Evotor5';
import { Evotor73 } from '../Product/Evotor/Evotor73';
import { Evotor10 } from '../Product/Evotor/Evotor10';
import { TstProduct } from '../TstProductBase';


import { aRegion, vDefaultRegion } from '../../../data/region';
import { aMcc, fFormatMcc } from '../../../data/industries';



import * as Base from '../../../clm-ui-kit/src/UI-KIT/Base'
import * as Inputs from '../../../clm-ui-kit/src/UI-KIT/Inputs/Inputs';
import HeaderTitle from '../../../clm-ui-kit/src/UI-KIT/HeaderTitle';
import FormH from '../../../clm-ui-kit/src/UI-KIT/FormH';
import FormV from '../../../clm-ui-kit/src/UI-KIT/FormV';
import BottomButtons from '../../../clm-ui-kit/src/UI-KIT/BottomButtons';
import ProductCardGreen, { CardContainer, CardWraper } from '../../../clm-ui-kit/src/UI-KIT/ProductCardGreen';
import CardBox from '../../../clm-ui-kit/src/UI-KIT/CardBox';
import ProductTabs from '../../../clm-ui-kit/src/UI-KIT/ProductTabs';
import CardTabs, { TabsI } from '../../../clm-ui-kit/src/UI-KIT/CardTabs';
import Select, { SelectI } from '../../../clm-ui-kit/src/UI-KIT/Inputs/SelectList';
import Checkbox from '../../../clm-ui-kit/src/UI-KIT/Inputs/Checkbox';
import Radio from '../../../clm-ui-kit/src/UI-KIT/Inputs/Radio';
import InputNumber from '../../../clm-ui-kit/src/UI-KIT/Inputs/InputNumber';
import ProductCardW, { PriceI, CardWContainer } from '../../../clm-ui-kit/src/UI-KIT/ProductCardW';
import * as ProductCardTable from '../../../clm-ui-kit/src/UI-KIT/ProductCardTable';

import * as S from './Style';

import Modal from '../../../clm-ui-kit/src/UI-KIT/Modal/Modal';

import { Evotor } from '../Product/Evotor/Evotor';
import { PayQr } from '../Product/PayQr';
import { PayQrOnCacheBox } from '../Product/PayQrOnCacheBox';
import { TrmIntegr } from '../Product/TrmTrade/TrmIntegr';
import { TrmStac } from '../Product/TrmTrade/TrmStac';
import { TrmMove } from '../Product/TrmTrade/TrmMove';

import {  fGetTarifName, fGetTarifOptions } from '../Product/EvotorTarif';



const mapState = (state: StoreStateI) => ({
    vCalc: state.StoreCalc.vCalc,
});

export const mapDispatchToProps = {
    fSetCalc: fSetCalc
}

/**
 * Типы для редакса
 */
const connector = connect(mapState, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type PropsI = PropsFromRedux & {
}


type ftEdit = (v: Test) => void;
type ftShowForm = () => void;

class Test {
    nCount: number = 0;

    subject = new Subject<Test>();

    public fOnEditDone: ftEdit | null = null;

    fGetEditForm = () => {
        return <Fragment>
            <FormH sTitle={'Количество '}>
                <InputNumber
                    nMin={1}
                    nMax={100}
                    nVal={this.nCount}
                    fOnChange={val => { this.nCount = Number(val) }}
                />
                <Inputs.ButtonGreen bDisable={false} onClick={() => {
                    this.subject.next(this);
                }}>DONE</Inputs.ButtonGreen>
            </FormH>
        </Fragment>
    }

    faGetEditInst(): Promise<Test> {
        return new Promise((resolve, reject) => {
            this.subject.asObservable().subscribe((data: Test) => {
                resolve(data)
            });
        })
    }
}


export interface StateI {
    vContent: React.ReactNode | null,
    bShowContent: boolean;
}

class Cmp extends React.Component<PropsI, StateI> {

    vTest: Test = new Test;

    constructor(props: PropsI) {
        super(props);


        this.state = {
            vContent: null,
            bShowContent: false,
        }
    }

    async componentDidMount() {
        this.vTest.fOnEditDone = this.fOnEditDone;
    }

    fOnEditDone = (v: Test) => {
        console.log(v);

    }

    fOnClick = async () => {
        this.setState({ bShowContent: true });
        const data = await this.vTest.faGetEditInst();
        console.log(data);
    }




    render() {
        return (
            <Fragment>
                <Inputs.ButtonGreen
                    bDisable={false}
                    onClick={this.fOnClick}>DONE</Inputs.ButtonGreen>

                {this.state.bShowContent && this.vTest.fGetEditForm()}
            </Fragment>
        )
    }
}

export default connector(Cmp);