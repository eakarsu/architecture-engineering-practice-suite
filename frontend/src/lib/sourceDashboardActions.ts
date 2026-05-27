export type SourceDashboardAction = {
  id: string;
  label: string;
  description: string;
  href: string;
  sourceProjects: string[];
  examples: string[];
  count: number;
};

export const sourceDashboardActions: SourceDashboardAction[] = [
  {
    "id": "floor-plan-analyzer",
    "label": "Floor Plan Analyzer",
    "description": "Open Floor Plan Analyzer workflows elevated from AIFloorPlanAnalyzer.",
    "href": "/floor-plan-review",
    "sourceProjects": [
      "AIFloorPlanAnalyzer"
    ],
    "examples": [
      "Floor Plan Review",
      "Space Utilization",
      "Code Layout Issues"
    ],
    "count": 1
  }
];
