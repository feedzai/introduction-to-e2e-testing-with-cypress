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
    cy.findByTestId(TOGGLE_THEME_BTN).click();

    // 3 - Check the theme state again and expect it to have been changed
    cy.get("@themeState").should("have.class", "darkmode");
  });

  it("Add Task for Next Week", () => {
    // 1 - Click on Add Task Plus (Show actions) button
    cy.get(PAGETITLE_LBL).should("have.text", "Inbox");
    cy.get(ADDTASK.SHOWACTIONS_BTN).click();

    // 2 - Check all task-related buttons are visible
    cy.get(ADDTASK.SUBMIT_BTN).should("be.visible");
    cy.get(ADDTASK.CANCEL_BTN).should("be.visible");
    cy.get(ADDTASK.PROJECT_MENU_BTN).should("be.visible");

    // 3 - Open the Date menu and choose the "Next Week" option
    cy.get(ADDTASK.DATE_MENU.BTN).should("be.visible").click();
    cy.get(ADDTASK.DATE_MENU.NEXTWEEK_VAL).click();

    // 4 - Fill task field and click on Add Task (Submit) button
    const newTask = "Check tasks for the next sprint";
    cy.get(ADDTASK.TXT).should("be.visible").type(newTask);
    cy.get(ADDTASK.SUBMIT_BTN).click();

    // 5 - Click on "Next 7 days" link in the side menu
    // and check that the task created
    cy.get(MENU.NEXT7DAYS_BTN).click();
    cy.get(PAGETITLE_LBL).contains("Next 7 Days");
    cy.get(TASK_CHK).eq(0).parent().contains(newTask);
  });

  it.only("Add Project", () => {
    const projectName = "Shift Appens 2022";

    // 1 - Click on "Add Project" button
    cy.get(ADDPROJECT.SHOWACTIONS_BTN).click();

    // 2 - Check that the "Add Project" content is visible
    cy.get(ADDPROJECT.WRP).should("be.visible");

    // 3 - Fill the Input field with a project name
    cy.get(ADDPROJECT.WRP).within(() => {
      cy.get("input").type(projectName);
      // 4 - Submit your new project name
      cy.get(ADDPROJECT.SUBMIT_BTN).should("be.enabled").click();
    });

    // 4 - Verify that a new project was created
    cy.get(PROJECT_LBL).contains(projectName);
  });
});
