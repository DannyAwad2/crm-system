import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberProfileComponent } from './team-member-profile.component';

describe('TeamMemberProfileComponent', () => {
  let component: TeamMemberProfileComponent;
  let fixture: ComponentFixture<TeamMemberProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamMemberProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamMemberProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
