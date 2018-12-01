import React from 'react'

const MenuContext = React.createContext()

export class MenuProvider extends React.Component {
  state = { toggled: false }

  render() {
    return (
      <MenuContext.Provider
        value={{
          toggle: () =>
            this.setState(previousState => ({
              toggled: !previousState.toggled,
            })),
          toggled: this.state.toggled,
        }}
      >
        {this.props.children}
      </MenuContext.Provider>
    )
  }
}

export const { Consumer: MenuConsumer } = MenuContext
