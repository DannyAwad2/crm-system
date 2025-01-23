import { Component, inject, OnInit } from '@angular/core';
import { DealStatus, IDeal, Priority } from '../../shared/ideal';
import { UserType } from '../../shared/iuser';
import { PipelineStageComponent } from '../../components/pipeline-stage/pipeline-stage.component';
import { PipelineHeaderComponent } from '../../components/pipeline-header/pipeline-header.component';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { NotificationService } from '../../services/notification.service';
import { StageModalComponent } from '../../components/stage-modal/stage-modal.component';
import { DealModalComponent } from '../../components/deal-modal/deal-modal.component';

@Component({
  selector: 'app-pipeline',
  imports: [
    PipelineStageComponent,
    PipelineHeaderComponent,
    StageModalComponent,
    StageModalComponent,
    DealModalComponent,
  ],
  templateUrl: './pipeline.component.html',
  styleUrl: './pipeline.component.scss',
})
export class PipelineComponent {
  deals: IDeal[] = Array.from({ length: 12 }, (_, index) => ({
    product: {
      name: `Product ${index + 1}`,
      price: Math.floor(Math.random() * 100000) + 5000, // Random price between $5000 and $100000
      description: `This is the description for Product ${index + 1}.`,
    },
    user: {
      name: `User ${index + 1}`,
      type: ['prospect', 'customer', 'partner', 'lead'][index % 4] as UserType, // Rotate user types
      email: `user${index + 1}@example.com`,
      phone: `+12345678${index}`,
    },
    status: ['proposal', 'meeting', 'lead', 'negotiation', 'win', 'lose'][
      index % 6
    ] as DealStatus, // Rotate statuses
    teamId: `team-${Math.floor(index / 3) + 1}`, // Group deals into teams
    dealId: `D-${String(index + 1).padStart(3, '0')}`,
    createdAt: `2025-01-${String(index + 1).padStart(2, '0')}`,
    updatedAt: `2025-01-${String(index + 2).padStart(2, '0')}`,
    priority: ['low', 'medium', 'high'][index % 3] as Priority, // Rotate priorities
    notes: `Notes for deal ${index + 1}.`,
    estimatedCloseDate: `2025-02-${String(index + 10).padStart(2, '0')}`,
    attachments: [
      {
        type: 'PDF',
        name: `Document_${index + 1}.pdf`,
        url: `https://example.com/documents/doc_${index + 1}.pdf`,
      },
    ],
    teamMembers: [
      {
        name: `Team Member A${index + 1}`,
        role: 'Sales Manager',
        email: `teammemberA${index + 1}@example.com`,
      },
      {
        name: `Team Member B${index + 1}`,
        role: 'Technical Consultant',
        email: `teammemberB${index + 1}@example.com`,
      },
    ],
  }));

  dropListIds = [
    'leads',
    'meetings',
    'proposals',
    'negotiations',
    'wins',
    'loses',
  ];

  notify = inject(NotificationService);

  leads = this.getDealStages('lead');
  meetings = this.getDealStages('meeting');
  negotiations = this.getDealStages('negotiation');
  proposals = this.getDealStages('proposal');
  loses = this.getDealStages('lose');
  wins = this.getDealStages('win');

  isDealsUpdated: boolean = false;

  getDealStages(stage: DealStatus) {
    return this.deals.filter((deal) => deal.status === stage);
  }

  handleChange(event: CdkDragDrop<IDeal[]>) {
    this.isDealsUpdated = true;
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  handleSave() {
    if (this.isDealsUpdated) {
      const updatedDeals = [
        ...this.leads.map((item) => {
          item.status = 'lead';
          return item;
        }),
        ...this.loses.map((item) => {
          item.status = 'lose';
          return item;
        }),
        ...this.meetings.map((item) => {
          item.status = 'meeting';
          return item;
        }),
        ...this.negotiations.map((item) => {
          item.status = 'negotiation';
          return item;
        }),
        ...this.proposals.map((item) => {
          item.status = 'proposal';
          return item;
        }),
      ];
      console.log(updatedDeals);
      this.isDealsUpdated = false;
      this.notify.toast('chages saved', 'success');
    }
  }
}
