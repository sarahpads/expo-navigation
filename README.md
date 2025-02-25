When navigating between two screens within the same stack, the screen will turn into a blank, white screen. This happens both when navigating to a shared route group, or when navigating to a screen within the same group.

When inspecting the component tree, both routes still exist in the stack and the 'focused' state is set appropriately. But the screen is blank.

## Steps to Reproduce

1. `npm run android`
2. Tap on 'go to shared route'
3. Tap on 'go to home', which uses `router.navigate` to navigate to the previous screen
4. Tap on 'go to shared route' again
5. Tap on 'go to home` again
6. Observe that the screen is blank. When inspecting the component tree, I can see that both the home/shared routes exist in the hierarchy, and that the index screen has the appropriate focus state.
