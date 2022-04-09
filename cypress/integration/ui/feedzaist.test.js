/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

/**
 * Example of tests against Todoit using Cypress capabilities to validate
 * and interract with UI.
 *
 * @author Bruno Lages (bruno.lages@feedzai.com)
 */

import {
  PAGETITLE_LBL,
  MAIN_CONTENT,
  TOGGLE_THEME_BTN,
  MENU,
  ADDTASK,
  TASK_CHK,
  ADDPROJECT,
  PROJECT_LBL,
} from "../../selectors";

describe("Feedzaist - Add Task", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should change the app theme", () => {
    // 1 - Get the current theme state and save it as an alias
    cy.findByTestId(MAIN_CONTENT).as("themeState").should("not.have.class", "darkmode");

    // 2 - Get the Theme switcher button and click on it to toggle the theme

    // 3 - Check the theme state again and expect it to have been changed
  });

  it("Add Task for Next Week", () => {
    // 1 - Click on Add Task Plus (Show actions) button
    cy.get(PAGETITLE_LBL).should("have.text", "Inbox");
    cy.get(ADDTASK.SHOWACTIONS_BTN).click();

    // 2 - Check all task-related buttons are visible

    // 3 - Open the Date menu and choose the "Next Week" option

    // 4 - Fill task field and click on Add Task (Submit) button

    // 5 - Click on "Next 7 days" link in the side menu
    // and check that the task created
  });

  it.only("Add Project", () => {
    const projectName = "Shift Appens 2022";

    // 1 - Click on "Add Project" button
    cy.get(ADDPROJECT.SHOWACTIONS_BTN).click();

    // 2 - Check that the "Add Project" content is visible

    // 3 - Fill the Input field with a project name

    // 4 - Verify that a new project was created
  });
});
