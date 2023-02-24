import Icon from 'components/elements/Icon'
import MyText from 'components/elements/MyText'
import * as React from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import { flexStyles } from 'styles/flex'
import { isEmpty } from 'utils'

interface IProfileMenuProps {
  menuTitle: string
  menuRightIcon?: React.ReactElement
  menuTitleIcon?: React.ReactElement
  menuRightText?: string
  hasMenuRightIcon?: boolean
  menuContainerStyle?: Object
  menuTitleStyle?: Object | {}
  onMenuClick?: Function
  disabled?: boolean
}
const defaultProps = {
  menuRightIcon: <Icon name="arrow-circle-right-white" size={30} />,
  menuTitleIcon: <></>,
  menuRightText: '',
  hasMenuRightIcon: true,
  menuContainerStyle: {},
  menuTitleStyle: {},
  onMenuClick: () => {},
  disabled: false,
}
const ProfileMenu: React.FunctionComponent<IProfileMenuProps> = (props) => {
  const {
    menuTitle,
    menuRightText,
    menuTitleIcon,
    menuContainerStyle,
    menuTitleStyle,
    onMenuClick,
    disabled,
  } = props
  return (
    <Pressable
      onPress={() => {
        if (onMenuClick) onMenuClick()
      }}
      disabled={disabled}
    >
      <View
        style={{
          ...flexStyles.flex,
          ...profileMenuStyles.menuContainer,
          ...menuContainerStyle,
        }}
      >
        <View style={{ ...profileMenuStyles.titleContainer, ...(menuTitleStyle || []) }}>
          <MyText>{menuTitle}</MyText>
          {!isEmpty(menuTitleIcon) && menuTitleIcon}
        </View>
        <View>
          <MenuRightIcon {...props} />
          {!isEmpty(menuRightText) && <MyText>{menuRightText || ''}</MyText>}
        </View>
      </View>
    </Pressable>
  )
}

const MenuRightIcon = (props: IProfileMenuProps) => {
  const { menuRightIcon } = props
  if (!props.hasMenuRightIcon) return null
  else {
    if (!isEmpty(menuRightIcon)) return menuRightIcon || null
    else return <Icon name="arrow-circle-right-fill" />
  }
}
const profileMenuStyles = StyleSheet.create({
  menuContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 11,
  },
  titleContainer: {},
})
ProfileMenu.defaultProps = defaultProps
export default ProfileMenu
