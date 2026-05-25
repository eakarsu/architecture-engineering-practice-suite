# Architecture Engineering Practice Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIArchitectureEngineeringPracticeAssistant`
- `AIArchitectureEngineeringPracticeOperations`
- `AIArchitectureEngineeringPracticeAnalytics`
- `AIArchitectureEngineeringPracticeWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/architecture-engineering-practice-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:5490`

Seeded users:
- `admin@architecture-engineering-practice.local / admin123`
- `manager@architecture-engineering-practice.local / manager123`
- `analyst@architecture-engineering-practice.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/architecture-engineering-practice-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:5490 npm run smoke
```
