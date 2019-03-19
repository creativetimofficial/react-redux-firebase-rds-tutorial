const addStatCardAction = (
  statName,
  statDescription,
  statIcon,
  statIconColor,
  statFooterIcon,
  statFooterIconState,
  statFooterPercentage,
  statFooterText
) => async dispatch => {
  // here we'll make a call to our database (firebase)
  // to add our new stat card with the above details
  dispatch({
    type: "addStatCard",
    payload: {
      statName: statName,
      statDescription: statDescription,
      statIcon: statIcon,
      statIconColor: statIconColor,
      statFooterIcon: statFooterIcon,
      statFooterIconState: statFooterIconState,
      statFooterPercentage: statFooterPercentage,
      statFooterText: statFooterText
    }
  });
};
export default addStatCardAction;
