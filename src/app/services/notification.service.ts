import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  /**
   * Displays a confirmation dialog.
   * @param btnTitle The title of the confirmation button.
   * @param message The message to display.
   * @param btn The button style class suffix (e.g., "primary", "danger").
   * @param icon The icon to display in the dialog.
   * @returns A promise resolved with the user's response.
   */
  confirm(
    btnTitle: string = 'Sure!',
    message: string = 'proceed',
    btn: string = 'primary',
    icon: SweetAlertIcon = 'question'
  ): Promise<any> {
    return Swal.fire({
      title: 'Are you sure?',
      text: `You want to ${message}!`,
      icon: icon,
      showCancelButton: true,
      background: 'var(--vz-modal-bg)',
      customClass: {
        confirmButton: `btn btn-${btn} btn-sm w-xs me-2 mt-2`,
        cancelButton: 'btn btn-ghost-danger btn-sm w-xs mt-2',
      },
      confirmButtonText: `Yes, ${btnTitle}`,
      buttonsStyling: false,
      showCloseButton: true,
    });
  }

  /**
   * Displays a popup alert.
   * @param title The title of the popup.
   * @param message The message to display.
   * @param icon The icon to display in the popup.
   */
  popup(title: string, message: string, icon: SweetAlertIcon = 'info'): void {
    Swal.fire({
      title: title,
      text: message,
      icon: icon,
      background: 'var(--vz-modal-bg)',
    });
  }

  /**
   * Displays a toast notification.
   * @param message The message to display in the toast.
   * @param icon The icon to display in the toast.
   */
  toast(message: string, icon: SweetAlertIcon = 'info'): void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: icon,
      title: message,
    });
  }
}
