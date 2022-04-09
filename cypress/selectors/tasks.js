/**
 * Locators from 'Add Task' feature in Feedzaist application.
 *
 * @author Bruno Lages (bruno.lages@feedzai.com)
 */

export const ADDTASK = {
  SHOWACTIONS_BTN: "[data-testid='show-main-action']",
  SUBMIT_BTN: "[data-testid='add-task']",
  CANCEL_BTN: "[data-testid='add-task-main-cancel']",
  TXT: "[data-testid='add-task-content']",
  PROJECT_MENU_BTN: "[data-testid='show-project-overlay']",
  DATE_MENU: {
    BTN: "[data-testid='show-task-date-overlay']",
    TOMORROW_VAL: "[data-testid='task-date-tomorrow']",
    NEXTWEEK_VAL: "[data-testid='task-date-next-week']",
  },
};

export const TASK_CHK = "[data-testid='checkbox-action']";
