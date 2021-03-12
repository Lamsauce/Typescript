/* !!! FOR READABILITY LOOK AT TS FILE !!! */

/* === TYPE ALIAS / CUSTOM TYPE === */
type modalState = "open" | "closed";
type lockState = "locked" | "unlocked";

const modal: modalState = "open";

// will allow the type to only be those two strings.

// Can be super useful in React.

// If type alias is an object, should be using an interface instead of custom types.