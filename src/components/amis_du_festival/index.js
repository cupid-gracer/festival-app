import React,{useEffect, useState} from "react";
import right_arrow from '../../assets/right-arrow.svg';
import check from '../../assets/check.svg';
import {data} from '../../config/const';
import './style.scss';

function Tab_btn(props){
    const btn_class = props.active?"btn_tab active":"btn_tab";
    return(
        <div className={btn_class} onClick={props.onClick}>
            {props.name}
        </div>
    )
}

function Perk_btn(props){
    const btn_class = props.active?"btn_perk active":"btn_perk";
    const _cl = btn_class +" " + props.className;
    return(
        <div className={btn_class} onClick={props.onClick}>
            {props.name}
        </div>
    )
}

function Perk_detail(props){
    const perk_amount = props.amount;
    const perk_unit = props.unit;
    const profit_list = props.profit_list;
    return(
        <div className="perk_detail">
            <div className="perk_amount">{perk_amount} </div>
            <div className="perk_unit">{perk_unit} </div>
            <div className="profit_list">
                {profit_list.map((t, i)=>{
                    return <div className="profit" key={i}><img className="img_check" src={check}/>{t}</div>
                })}
            </div>
        </div>
    )
}

function Amis_du_festifal(){
    const [donates, setDonates] = useState(data[0]['donations'])
    const [description, setDescription] = useState(donates[0])
    const [perks_list_class, setPerks_list_class] = useState(data[0]['donations'].length>5?"perks_list grid":"perks_list")
    const [activeTab, setActiveTab] = useState(0);
    const [activePerkBtn, setActivePerkBtn] = useState(0);

    const changeTab = (e, i) => {
        let _perks_list_class = data[i]['donations'].length>5?"perks_list grid":"perks_list";
        setPerks_list_class(_perks_list_class)
        setDonates(data[i]['donations'])
        setDescription(data[i]['donations'][0])
        setActiveTab(i)
    }

    const changeLevel = (i) => {
        setDescription(donates[i])
        setActivePerkBtn(i)
        console.log(donates.length)
    }

    return(
        <div className="body">
            <div className="tab_header">
                <div className="tab_description">Choose Your Donate Frequency</div>
                <div className="tabs">
                    {data.map((tab, i)=>{
                        let active = activeTab == i? true:false;
                        return <Tab_btn key={i} name={tab.tab_name} active={active} onClick={(event)=>changeTab(event, i)} />
                    })}
                </div>
            </div>
            <div className="tab_body">
                <div className="perks">
                    <div className="choose_donate_level">Choose Donate Level</div>
                    <div className={perks_list_class}>
                        {donates.map((donate, i)=>{
                            const name = "$" + donate['level'];
                            let active = activePerkBtn == i? true:false;
                            return <Perk_btn  key={i} name={name} active={active} onClick={() => changeLevel( i)}/>
                        })}
                    </div>
                </div>
                <div className="perk_des">
                    <Perk_detail amount={description.perks} unit={description.unit} profit_list={description.profits} />
                </div>
            </div>
            <div className="action">
                <div className="btn_continue">
                    <div>Continue</div>
                    <img src = {right_arrow}/>
                </div>
            </div>
        </div>
    )
}

export default Amis_du_festifal;