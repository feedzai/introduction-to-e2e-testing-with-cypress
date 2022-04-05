/// <reference types="cypress" />

/**
 * Example of tests against Todoit using Cypress capabilities to validate
 * and interract with UI.
 *
 * @author Bruno Lages (bruno.lages@feedzai.com)
 */

import { PAGETITLE_LBL, MENU, ADDTASK, TASK_CHK } from "selectors";

describe("Todoist - Add Task", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  afterEach(() => {
    cy.get(MENU.NEXT7DAYS_BTN).click();
    cy.get(TASK_CHK).each((task) => {
      cy.wrap(task).click();
    });
  });

  it("Add Task for Next Week", () => {
    // 1.1 - Click on Add Task Plus (Show actions) button
    cy.get(PAGETITLE_LBL).contains("Inbox");
    cy.get(ADDTASK.SHOWACTIONS_BTN).click();

    // 1.2 - Check all buttons and click on Date button (menu)
    cy.get(ADDTASK.SUBMIT_BTN).should("be.visible");
    cy.get(ADDTASK.CANCEL_BTN).should("be.visible");
    cy.get(ADDTASK.PROJECT_MENU_BTN).should("be.visible");
    cy.get(ADDTASK.DATE_MENU.BTN).should("be.visible").click();

    // 2.1 - Click on Next Week dropdown (menu)
    cy.get(ADDTASK.DATE_MENU.NEXTWEEK_VAL).click();

    // 2.2 - Fill task field and click on Add Task (Submit) button
    cy.get(ADDTASK.TXT).should("be.visible").type("Check tasks for the next sprint");
    cy.get(ADDTASK.SUBMIT_BTN).click();

    // 3.1 - Click on "Next 7 days" menu and check task created
    cy.get(MENU.NEXT7DAYS_BTN).click();
    cy.get(PAGETITLE_LBL).contains("Next 7 Days");
    cy.get(TASK_CHK).eq(0).parent().contains("Check tasks for the next sprint");
  });
  it.skip("Add Project", () => {
    // 1.1 - Click on Add Project button

    // 2.1 - Fill project field and click on Add Project (Submit) button

    // 2.2 - Check Projects (old and new projects)

  });
});
