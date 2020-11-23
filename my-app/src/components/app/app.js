import React, {Component} from 'react';
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";
import styled from 'styled-components'

import './app.css';
import {render} from "@testing-library/react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, id: 1, lake: false},
                {label: 'That is so good', important: false, id: 2, lake: false},
                {label: 'I need a break...', important: false, id: 3, lake: false},
            ]
        };
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)
        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.onToggleLike = this.onToggleLike.bind(this)
        
        this.maxId = 4;
    }
    
    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex((elem => elem.id === id));
            
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            
            const newArr = [...before, ...after]; //spread operator ??
            
            return {
                data: newArr
            }
        })
    }
    
    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        };
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }
  //попробовать переписать
    onToggleImportant(id) {
        this.setState(({data})=> {
            const index = data.findIndex(elem => elem.id === id)
            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem,  ...data.slice(index + 1)];
        
            return {
                data: newArr
            }
        })
    }
    
    onToggleLike(id) {
        this.setState(({data})=> {
            const index = data.findIndex(elem => elem.id === id)
            const old = data[index];
            const newItem = {...old, like: !old.like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            
            return {
                data: newArr
            }
        })
    }
    
    render() {
        const {data} = this.state
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        
        const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;
        const StyledAppBlock = styled(AppBlock)`
    background-color: HoneyDew;`
        
        return (
            
            <StyledAppBlock>
                <AppHeader
                liked={liked}
                allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList
                    posts={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </StyledAppBlock>
        )
    }
}

