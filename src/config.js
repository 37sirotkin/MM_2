import { Field } from './Sprites/Field';
import { ItemField } from './Sprites/ItemField';
import { CrystalsBar } from './Sprites/CrystalsBar';
import bg from '../dist/images/bg.jpg';
import back from '../dist/images/UI/back.png';
import btnDownload from '../dist/images/UI/download.png';
import continueButton from '../dist/images/UI/continue.png';
import logo from '../dist/images/UI/logo.png'
import logo_1 from '../dist/images/UI/logo_1.png';
import logoText from '../dist/images/UI/logoText.png';
import fieldImg from '../dist/images/field.png';
import devCell from '../dist/images/devCell.png';
import lock from '../dist/images/UI/lock.png';
import episode4 from '../dist/images/UI/episode4.png';
import hand from '../dist/images/UI/hand.png';
import select from '../dist/images/UI/select.png';
import mergeThem from '../dist/images/UI/merge_them.png';
import mergeThemHor from '../dist/images/UI/merge_them_hor.png';
import hollowGlobeItem from '../dist/images/items/hollow_globe_item.png';
import globeItem from '../dist/images/items/globe_item.png';
import bigGlobeItem from '../dist/images/items/big_globe_item.png';
import crystalsBarImg from '../dist/images/UI/crystals_bar.png';
import mergeEffect from '../dist/images/merge_effect.png';
import crystalBoost from '../dist/images/crystal_boost.png';
import coinsBar from '../dist/images/UI/coins.png';
import americanoItem from '../dist/images/items/americano_item.png';
import paperCupItem from '../dist/images/items/paper_cup.png';
import latteItem from '../dist/images/items/latte.png';
import boxItem from '../dist/images/items/box.png';
import chestItem from '../dist/images/items/chest.png';
import buffet1Item from '../dist/images/items/buffet_1.png';
import buffet2Item from '../dist/images/items/buffet_2.png';
import buffet3Item from '../dist/images/items/buffet_3.png';
import coins1Item from '../dist/images/items/coins_1.png';
import coins2Item from '../dist/images/items/coins_2.png';
import coins3Item from '../dist/images/items/coins_3.png';
import energy1Item from '../dist/images/items/energy_1.png';
import energy2Item from '../dist/images/items/energy_2.png';
import energy3Item from '../dist/images/items/energy_3.png';
import experience1Item from '../dist/images/items/experience_1.png';
import experience2Item from '../dist/images/items/experience_2.png';

export default [
    {
        name: 'bg',
        image: bg,
        objectId: 'bg',
        alpha: 1,
        anchor: { x: 0.5, y: 0.5 },
        x: 0,
        y: 0,
        adaptivePosition: false,
    },
    {
        name: 'back',
        image: back,
        objectId: 'back',
        alpha: 0.5,
        anchor: { x: .5, y: .5 },
        x: 0,
        y: 0,
    },
    {
        name: 'logo',
        image: logo,
        objectId: 'logo',
        alpha: 0,
        anchor: { x: .5, y: .5 },
        scale: { x: 2, y: 2 },
        x: 90,
        y: -70,
        adaptivePosition: false,
    },
    {
        name: 'logo_1',
        image: logo_1,
        objectId: 'logo1',
        alpha: 1,
        anchor: { x: .5, y: .5 },
        x: 0,
        y: -300,
    },
    {
        name: 'merge_them_texture',
        image: mergeThem,
        objectId: 'mergeThem',
        alpha: 0,
        anchor: { x: .5, y: .5 },
        scale: { x: 1.2, y: 1.2 },
        x: 0,
        y: -350,
    },
    {
        name: 'merge_them_hor_texture',
        image: mergeThemHor,
    },
    {
        name: 'crystals_bar',
        image: crystalsBarImg,
        class: CrystalsBar,
        objectId: 'crystalsBar',
        alpha: 1,
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 0.8, y: 0.8 },
        x: 280,
        y: 90,
    },
    {
        name: 'coins_bar',
        image: coinsBar,
        objectId: 'coinsBar',
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 0.8, y: 0.8 },
        alpha: 1,
        x: 490,
        y: 90,
    },
    {
        name: 'lock',
        image: lock,
        objectId: 'lock',
        anchor: { x: 0.5, y: 0.5 },
        alpha: 1,
        x: 0,
        y: 0,
    },
    {
        name: 'episode4',
        image: episode4,
        objectId: 'episode4',
        anchor: { x: 0.5, y: 0.5 },
        alpha: 1,
        x: 0,
        y: 80,
    },
    {
        name: 'hand',
        image: hand,
        objectId: 'hand',
        anchor: { x: 0.5, y: 0.5 },
        alpha: 0,
        x: 150,
        y: -150,
    },
    {
        name: 'select',
        image: select,
        objectId: 'select',
        anchor: { x: 0.5, y: 0.5 },
        alpha: 1,
        x: 0,
        y: 0,
    },
    {
        name: 'btn_download',
        image: btnDownload ,
        objectId: 'btnDownload',
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 1.5, y: 1.5 },
        alpha: 1,
        x: 0,
        y: 400,
    },
    {
        name: 'continueButton',
        image: continueButton,
        objectId: 'continueButton',
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 1.3, y: 1.3 },
        alpha: 1,
        x: 0,
        y: 300,
    },
    {
        name: 'logoText',
        image: logoText,
        objectId: 'logoText',
        anchor: { x: 0.5, y: 0.5 },
        scale: { x: 1, y: 1 },
        alpha: 1,
        x: 0,
        y: 0,
    },
    {
        name: 'devCell',
        image: devCell,
    },
    {
        name: 'merge_effect',
        image: mergeEffect,
    },
    {
        name: 'crystal_boost',
        image: crystalBoost,
    },
    {
        name: 'field',
        image: fieldImg,
        class: Field,
        objectId: 'field',
        alpha: 1,
        anchor: { x: 0.5, y: 0.5 },
        x: 0,
        y: 0,
    },
    {
        name: 'hollow_globe_item_texture',
        image: hollowGlobeItem,
    },
    {
        name: 'hollow_globe_item_texture',
        class: ItemField,
        type: 'hollow_globe',
        parentType: 'globe',
        onBoard: true,
        objectId: 'hollow_globe1',
        alpha: 1,
    },
    {
        name: 'hollow_globe_item_texture',
        class: ItemField,
        type: 'hollow_globe',
        parentType: 'globe',
        onBoard: true,
        objectId: 'hollow_globe2',
        alpha: 1,
    },
    {
        name: 'hollow_globe_item_texture',
        class: ItemField,
        type: 'hollow_globe',
        parentType: 'globe',
        onBoard: true,
        objectId: 'hollow_globe3',
        alpha: 1,
    },
    {
        name: 'hollow_globe_item_texture',
        class: ItemField,
        type: 'hollow_globe',
        parentType: 'globe',
        onBoard: true,
        objectId: 'hollow_globe4',
        alpha: 1,
    },
    {
        name: 'globe_item_texture',
        image: globeItem,
    },
    {
        name: 'globe_item_texture',
        class: ItemField,
        type: 'globe',
        parentType: 'big_globe',
        onBoard: false,
        objectId: 'globe',
        alpha: 1,
    },
    {
        name: 'big_globe_item_texture',
        image: bigGlobeItem,
    },
    {
        name: 'big_globe_item_texture',
        class: ItemField,
        type: 'big_globe',
        parentType: 'none',
        onBoard: false,
        objectId: 'big_globe',
        alpha: 1,
    },
    {
        name: 'americano_item_texture',
        image: americanoItem
    },
    {
        name: 'americano_item_texture',
        class: ItemField,
        type: 'americano',
        parentType: 'paper_cup',
        onBoard: true,
        objectId: 'americano1',
        alpha: 1,
    },
    {
        name: 'americano_item_texture',
        class: ItemField,
        type: 'americano',
        parentType: 'paper_cup',
        onBoard: true,
        objectId: 'americano2',
        alpha: 1,
    },
    {
        name: 'americano_item_texture',
        class: ItemField,
        type: 'americano',
        parentType: 'paper_cup',
        onBoard: true,
        objectId: 'americano3',
        alpha: 1,
    },
    {
        name: 'americano_item_texture',
        class: ItemField,
        type: 'americano',
        parentType: 'paper_cup',
        onBoard: true,
        objectId: 'americano4',
        alpha: 1,
    },
    {
        name: 'paper_cup_item_texture',
        image: paperCupItem
    },
    {
        name: 'paper_cup_item_texture',
        class: ItemField,
        type: 'paper_cup',
        parentType: 'latte',
        onBoard: false,
        objectId: 'paper_cup',
        alpha: 1,
    },
    {
        name: 'latte_item_texture',
        image: latteItem
    },
    {
        name: 'latte_item_texture',
        class: ItemField,
        type: 'latte',
        parentType: 'none',
        onBoard: false,
        objectId: 'latte',
        alpha: 1,
    },
    {
        name: 'box_item_texture',
        image: boxItem
    },
    {
        name: 'box_item_texture',
        class: ItemField,
        type: 'box',
        parentType: 'chest',
        onBoard: true,
        objectId: 'box1',
        alpha: 1,
    },
    {
        name: 'box_item_texture',
        class: ItemField,
        type: 'box',
        parentType: 'chest',
        onBoard: true,
        objectId: 'box2',
        alpha: 1,
    },
    {
        name: 'chest_item_texture',
        image: chestItem
    },
    {
        name: 'chest_item_texture',
        class: ItemField,
        type: 'chest',
        parentType: 'none',
        onBoard: false,
        objectId: 'chest',
        alpha: 1,
    },
    {
        name: 'buffet1_item_texture',
        image: buffet1Item
    },
    {
        name: 'buffet1_item_texture',
        class: ItemField,
        type: 'buffet1',
        parentType: 'buffet2',
        onBoard: true,
        objectId: 'buffet1_1',
        alpha: 1,
    },
    {
        name: 'buffet1_item_texture',
        class: ItemField,
        type: 'buffet1',
        parentType: 'buffet2',
        onBoard: true,
        objectId: 'buffet1_2',
        alpha: 1,
    },
    {
        name: 'buffet1_item_texture',
        class: ItemField,
        type: 'buffet1',
        parentType: 'buffet2',
        onBoard: true,
        objectId: 'buffet1_3',
        alpha: 1,
    },
    {
        name: 'buffet1_item_texture',
        class: ItemField,
        type: 'buffet1',
        parentType: 'buffet2',
        onBoard: true,
        objectId: 'buffet1_4',
        alpha: 1,
    },
    {
        name: 'buffet2_item_texture',
        image: buffet2Item
    },
    {
        name: 'buffet2_item_texture',
        class: ItemField,
        type: 'buffet2',
        parentType: 'buffet3',
        onBoard: false,
        objectId: 'buffet2',
        alpha: 1,
    },
    {
        name: 'buffet3_item_texture',
        image: buffet3Item
    },
    {
        name: 'buffet3_item_texture',
        class: ItemField,
        type: 'buffet3',
        parentType: 'none',
        onBoard: false,
        objectId: 'buffet3',
        alpha: 1,
    },
    {
        name: 'coins1_item_texture',
        image: coins1Item
    },
    {
        name: 'coins1_item_texture',
        class: ItemField,
        type: 'coins1',
        parentType: 'coins2',
        onBoard: true,
        objectId: 'coins1_1',
        alpha: 1,
    },
    {
        name: 'coins1_item_texture',
        class: ItemField,
        type: 'coins1',
        parentType: 'coins2',
        onBoard: true,
        objectId: 'coins1_2',
        alpha: 1,
    },
    {
        name: 'coins1_item_texture',
        class: ItemField,
        type: 'coins1',
        parentType: 'coins2',
        onBoard: true,
        objectId: 'coins1_3',
        alpha: 1,
    },
    {
        name: 'coins1_item_texture',
        class: ItemField,
        type: 'coins1',
        parentType: 'coins2',
        onBoard: true,
        objectId: 'coins1_4',
        alpha: 1,
    },
    {
        name: 'coins2_item_texture',
        image: coins2Item
    },
    {
        name: 'coins2_item_texture',
        class: ItemField,
        type: 'coins2',
        parentType: 'coins3',
        onBoard: false,
        objectId: 'coins2',
        alpha: 1,
    },
    {
        name: 'coins3_item_texture',
        image: coins3Item
    },
    {
        name: 'coins3_item_texture',
        class: ItemField,
        type: 'coins3',
        parentType: 'none',
        onBoard: false,
        objectId: 'coins3',
        alpha: 1,
    },
    {
        name: 'energy1_item_texture',
        image: energy1Item
    },
    {
        name: 'energy1_item_texture',
        class: ItemField,
        type: 'energy1',
        parentType: 'energy2',
        onBoard: true,
        objectId: 'energy1_1',
        alpha: 1,
    },
    {
        name: 'energy1_item_texture',
        class: ItemField,
        type: 'energy1',
        parentType: 'energy2',
        onBoard: true,
        objectId: 'energy1_2',
        alpha: 1,
    },
    {
        name: 'energy1_item_texture',
        class: ItemField,
        type: 'energy1',
        parentType: 'energy2',
        onBoard: true,
        objectId: 'energy1_3',
        alpha: 1,
    },
    {
        name: 'energy1_item_texture',
        class: ItemField,
        type: 'energy1',
        parentType: 'energy2',
        onBoard: true,
        objectId: 'energy1_4',
        alpha: 1,
    },
    {
        name: 'energy2_item_texture',
        image: energy2Item
    },
    {
        name: 'energy2_item_texture',
        class: ItemField,
        type: 'energy2',
        parentType: 'energy3',
        onBoard: false,
        objectId: 'energy2',
        alpha: 1,
    },
    {
        name: 'energy3_item_texture',
        image: energy3Item
    },
    {
        name: 'energy3_item_texture',
        class: ItemField,
        type: 'energy3',
        parentType: 'none',
        onBoard: false,
        objectId: 'energy3',
        alpha: 1,
    },
    {
        name: 'experience1_item_texture',
        image: experience1Item
    },
    {
        name: 'experience1_item_texture',
        class: ItemField,
        type: 'experience1',
        parentType: 'experience2',
        onBoard: true,
        objectId: 'experience1_1',
        alpha: 1,
    },
    {
        name: 'experience1_item_texture',
        class: ItemField,
        type: 'experience1',
        parentType: 'experience2',
        onBoard: true,
        objectId: 'experience1_2',
        alpha: 1,
    },
    {
        name: 'experience2_item_texture',
        image: experience2Item
    },
    {
        name: 'experience2_item_texture',
        class: ItemField,
        type: 'experience2',
        parentType: 'none',
        onBoard: false,
        objectId: 'experience2',
        alpha: 1,
    },
];
