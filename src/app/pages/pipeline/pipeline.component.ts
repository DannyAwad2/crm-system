import { Component, inject, OnInit } from '@angular/core';
import { DealStatus, IDeal, Priority } from '../../shared/ideal';
import { UserType } from '../../shared/iuser';
import { PipelineStageComponent } from '../../components/pipeline-stage/pipeline-stage.component';
import { PipelineHeaderComponent } from '../../components/pipeline-header/pipeline-header.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-pipeline',
  imports: [PipelineStageComponent, PipelineHeaderComponent],
  templateUrl: './pipeline.component.html',
  styleUrl: './pipeline.component.scss',
})
export class PipelineComponent implements OnInit {
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

  leads = this.getDealStages('lead');
  loses = this.getDealStages('lose');
  meetings = this.getDealStages('meeting');
  negotiations = this.getDealStages('negotiation');
  proposals = this.getDealStages('proposal');

  ngOnInit(): void {}

  getDealStages(stage: DealStatus) {
    return this.deals.filter((deal) => deal.status === stage);
  }

  handleChange(deals: IDeal[], event: CdkDragDrop<IDeal[]>) {
    moveItemInArray(deals, event.previousIndex, event.currentIndex);
  }
}
