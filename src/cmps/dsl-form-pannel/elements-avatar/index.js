import React from "react";
import AvatarMap from "./avatar-map";
import {Form, Button } from "antd";


function avatarWrap(Avatar){
  return class Hoc extends React.Component {
    render(){
      return <div className="avatar-field">
            <Form.Item label={Avatar.dsl.fieldName}>
              <Avatar {...this.props}></Avatar>
            </Form.Item>
          <Button type="small" shape="circle" icon="plus" onClick={this.addAvatar}/>
      </div>
    }
    addAvatar = ()=>{
      this.props.addAvatar(Avatar.dsl)
    }
  }
}

export default class ElementAvatars extends React.Component {
  render(){
    const list = this.props.avatars.map((Cmp,i) => {
      Cmp = avatarWrap(Cmp)
      return <Cmp key={i} addAvatar={this.props.addAvatar}></Cmp>
    })
    return <>
      {list}
    </>
  }
}

ElementAvatars.defaultProps = {
  avatars: Object.values(AvatarMap)
}